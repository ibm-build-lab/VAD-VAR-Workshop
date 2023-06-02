import React from 'react';

interface CopyTextProps {
    text?: string | null;
}

const CopyText = (props: CopyTextProps) => {
    const { text } = props;

    return (
        <pre className="--copy">
          <pre
            style={{
              color: "rgb(17, 27, 39)",
              background: "rgb(227, 233, 242)",
              fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              textAlign: "left",
              whiteSpace: "pre",
              wordSpacing: "normal",
              wordBreak: "normal",
              overflowWrap: "normal",
              lineHeight: "1.5",
              tabSize: 4,
              hyphens: "none",
              padding: "1em",
              margin: "0.5em 0px",
              overflow: "auto"
            }}
          >
            <span>
              <span>{text}{"\n"}</span>
            </span>
          </pre>
        </pre>
    );
};

export default CopyText;
