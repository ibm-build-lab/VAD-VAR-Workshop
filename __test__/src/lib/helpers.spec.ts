import { describe } from 'node:test';
import { expect, test } from 'vitest';
import {
  toHoursAndMinutes,
  isURLAbsolute,
  parseLocaleFromFileName,
  parseLocaleFromFilePath,
  generateSlugFromPath
} from '#/lib/helpers';

describe('helpers', () => {
  describe('toHoursAndMinutes', () => {
    test('input over 1 hour', () => {
      const output = toHoursAndMinutes(70);

      expect(output).toBe('1 hr 10 min');
    });

    test('input under 1 hour', () => {
      const output = toHoursAndMinutes(25);

      expect(output).toBe('25 min');
    });

    test('input exactly 2 hours', () => {
      const output = toHoursAndMinutes(120);

      expect(output).toBe('2 hrs');
    });
  });

  describe('isURLAbsolute', () => {
    test('mailto URI', () => {
      const output = isURLAbsolute('mailto:ibm@ibm.com');
      expect(output).toBe(true);
    });

    test('direct URL', () => {
      const output = isURLAbsolute('https://ibm.com');
      expect(output).toBe(true);
    });

    test('no protocol', () => {
      const output = isURLAbsolute('//ibm.com');
      expect(output).toBe(true);
    });

    test('relative URL', () => {
      const a = isURLAbsolute('/relative/item');
      expect(a).toBe(false);

      const b = isURLAbsolute('item');
      expect(b).toBe(false);
    });
  });

  describe('parseLocaleFromFileName', () => {
    test('with no locale in name', () => {
      const fileName = 'test.md';
      const output = parseLocaleFromFileName(fileName);
      expect(output).toStrictEqual({ name: 'test', locale: 'en' });
    });

    test('with locale in name', () => {
      const fileName = 'test.es.md';
      const output = parseLocaleFromFileName(fileName);
      expect(output).toStrictEqual({ name: 'test', locale: 'es' });
    });

    test('with no loclae in name and different default locale', () => {
      const fileName = 'test.md';
      const output = parseLocaleFromFileName(fileName, 'fr');
      expect(output).toStrictEqual({ name: 'test', locale: 'fr' });
    });
  });

  describe('parseLocaleFromFilePath', () => {
    test('with no locale in path', () => {
      const filePath = 'path/to/../test.md';
      const output = parseLocaleFromFilePath(filePath);
      expect(output).toStrictEqual({ name: 'test', locale: 'en' });
    });

    test('with locale in path', () => {
      const filePath = '/path/to/test.es.md';
      const output = parseLocaleFromFilePath(filePath);
      expect(output).toStrictEqual({ name: 'test', locale: 'es' });
    });

    test('with no locale in path and different default locale', () => {
      const filePath = './path/to/../test.md';
      const output = parseLocaleFromFilePath(filePath, 'fr');
      expect(output).toStrictEqual({ name: 'test', locale: 'fr' });
    });
  });

  describe('generateSlugFromPath', () => {
    test('with no locale in path', () => {
      const filePath = 'path/to/../test.md';
      const output = generateSlugFromPath(filePath);
      expect(output).toStrictEqual('en/path/test');
    });

    test('with locale in path', () => {
      const filePath = './path/to/test.es.md';
      const output = generateSlugFromPath(filePath);
      expect(output).toStrictEqual('es/path/to/test');
    });

    test('with no in locale path and different default locale', () => {
      const filePath = './path/to/../test.md';
      const output = generateSlugFromPath(filePath, { def: 'fr ' });
      expect(output).toStrictEqual('fr/path/test');
    });

    test('with no locale in path, different default locale, and prefix slice', () => {
      const filePath = './path/to/../test.md';
      const output = generateSlugFromPath(filePath, { def: 'fr ', start: 1 });
      expect(output).toStrictEqual('fr/test');
    });
  });
});
