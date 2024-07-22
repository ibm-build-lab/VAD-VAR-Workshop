***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
This example shows a Transform use case
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

TASK_BULLET_POINTS = "points"
TASK_COMPLEX_JSON_FORMAT = "json"
TASK_HTML_FORMAT = "html"
TASK_EXTRACT_EMAIL = "email"

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***,
***REMOVED***
***REMOVED***

***REMOVED***

def get_sample_text(task_type):

    if task_type == TASK_BULLET_POINTS:
        sample_text = f***REMOVED***
        During the August meetings, we will focus on collecting feedback and requirements for activation. 
        Meeting recordings will be posted in the slack channel. If you would like to join the August meetings, 
        please contact Jane Smith. We are looking forward to collaboration.’‘’
        ***REMOVED***
    elif task_type == TASK_HTML_FORMAT:
        sample_text = f***REMOVED***
        data_json = {{ "resturant employees" :[ 
        {{"name":"Shyam", "email":"shyamjaiswal@gmail.com"}},
        {{"name":"Bob", "email":"bob32@gmail.com"}},
        {{"name":"Jai", "email":"jai87@gmail.com"}}\]}}
        ***REMOVED***
    elif task_type == TASK_EXTRACT_EMAIL:
        sample_text = f***REMOVED***
        WW Team: Elena Lowery, elowery@us.ibm.com
        WW Team: Catherine Cao, catherine.cao@ibm.com
        Another Team: Tech Seller, techseller@ibm.com
        ***REMOVED***
    elif task_type == TASK_COMPLEX_JSON_FORMAT:
        sample_text = f***REMOVED***
        I want you to act as a website content editor. Given the phrase "in [languageName]" I want you to 
        provide the phrase translated into the languages indicated by a list of locales. `languageName` 
        is a variable in the phrase. `[languageName]` should be replaced with the name of the 
        language that relates to the relevant locale. For example, in the en_GB locale `languageName=English`, 
        so the expected translation is "in English". As a second example, in the fr_FR locale, 
        `languageName=francais`, so the expected translation is "en francais". Provide your 
        response as a JSON code block, with the JSON key as the locale, and the JSON value is the translated phrase. 
        Do not write explanations.

        The locales I want you to translate to are:
        en_US, es_US, pt_BR, es_MX, en_MX, en_CA, fr_CA, zh_CN, en_CN, en_AU, en_HK, en_IN, 
        ko_KR, en_MY, en_NZ, en_PH, en_SG, en_TW, zh_TW, th_TH, vi_VN, en_GB, en_EX, de_AT, 
        en_AT, fr_BE, nl_BE, en_BE, bg_BG, cs_CZ, en_CZ, da_DK, en_DK, et_EE, en_FI, fi_FI, en_FR, fr_FR, de_DE.
        
        Output:
        ***REMOVED***
***REMOVED***
        #
        sample_text = f***REMOVED***
        Generative AI, or Generative Artificial Intelligence, refers to a subset of artificial intelligence 
        techniques and models that are designed to generate new content, such as text, images, audio, 
        or even video, that resembles human-created content. These models are trained on large datasets 
        and learn the underlying patterns and structures of the data in order to generate new instances 
        that mimic the characteristics of the training data.
        ***REMOVED***

    return sample_text

def get_prompt(sample_text, task_type):

***REMOVED***

    if task_type == TASK_BULLET_POINTS:
        complete_prompt = f***REMOVED***
            Turn each sentence of the following text delimited by ''' into a numbered item:  
            Text: ```{sample_text}```
            ***REMOVED***
    elif task_type == TASK_HTML_FORMAT:
        complete_prompt = f***REMOVED***
            Translate the following python dictionary from JSON to an HTML 
            table with column headers and title: {sample_text}
            ***REMOVED***
    elif task_type == TASK_EXTRACT_EMAIL:
        complete_prompt =f***REMOVED***
            Create a list of email addresses from the following text in '''. Email addresses contain the @ symbol. 
            For example, user1@ibm.com, user2@ibm.com
            Text: {sample_text}
        ***REMOVED***
***REMOVED***
***REMOVED***
        complete_prompt = f***REMOVED***
            Summarize the text below, delimited by ''' , in at most 100 words.
            Text: ```{sample_text}```
            
            Summary: 
            ***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
    max_tokens = 300
    min_tokens = 30
    decoding = DecodingMethods.GREEDY
    temperature = 0.5

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

    sample_text1 = get_sample_text(TASK_BULLET_POINTS)
    sample_text2 = get_sample_text(TASK_HTML_FORMAT)
    sample_text3 = get_sample_text(TASK_EXTRACT_EMAIL)
    sample_text4 = get_sample_text(TASK_COMPLEX_JSON_FORMAT)

    complete_prompt1 = get_prompt(sample_text1, TASK_BULLET_POINTS)
    complete_prompt2 = get_prompt(sample_text2, TASK_HTML_FORMAT)
    complete_prompt3 = get_prompt(sample_text3, TASK_EXTRACT_EMAIL)
    # For the JSON format, the sample text includes the prompt
    complete_prompt4 = sample_text4

    generated_response = model.generate(prompt=complete_prompt1)
***REMOVED***

***REMOVED***
    print("--------------------------------- Bullet points from text -----------------------------------")
    print("Prompt: " + complete_prompt1.strip())
***REMOVED***
    print("Bullet points from text: " + response_text)
***REMOVED***

    # HTMl format
    generated_response = model.generate(prompt=complete_prompt2)
***REMOVED***
***REMOVED***
    print("--------------------------------- Transformed Format: HTML -----------------------------------")
    print("Prompt: " + complete_prompt2.strip())
***REMOVED***
    print("Transformed format: " + response_text)
***REMOVED***

    # HTMl format
    generated_response = model.generate(prompt=complete_prompt3)
***REMOVED***
***REMOVED***
    print("--------------------------------- Transformed Format: EMAIL -----------------------------------")
    print("Prompt: " + complete_prompt3.strip())
***REMOVED***
    print("Transformed format: " + response_text)
***REMOVED***

    # JSON format
    generated_response = model.generate(prompt=complete_prompt4)
***REMOVED***
***REMOVED***
    print("--------------------------------- Transformed Format: JSON -----------------------------------")
    print("Prompt: " + complete_prompt4.strip())
***REMOVED***
    print("Transformed format: " + response_text)
***REMOVED***

    # Test invocation of a function that will be called from an external module
    transform(api_key,watsonx_project_id,sample_text1,TASK_BULLET_POINTS,model_type)

def transform(request_api_key, request_project_id, sample_text,task,model_type):

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
    max_tokens = 300
    min_tokens = 30
    decoding = DecodingMethods.GREEDY
    temperature = 0.5

***REMOVED***
***REMOVED***

    complete_prompt = get_prompt(sample_text,task)

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

    return response_text

***REMOVED***
***REMOVED***
***REMOVED***

