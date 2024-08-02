***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
This example shows a simple generation or Q&A use case without comprehensive prompt tuning
***REMOVED***

# Install the wml and streamlit api your Python env prior to running this example:
***REMOVED***
# pip install streamlit

# In non-Anaconda Python environments, you may also need to install dotenv
# pip install python-dotenv

***REMOVED***
***REMOVED***
***REMOVED***

import streamlit as st

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***s
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

    print("*** Got credentials***")

# The get_model function creates an LLM model object with the specified parameters
def get_model(model_type,max_tokens,min_tokens,decoding,stop_sequences):

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
        GenParams.STOP_SEQUENCES:stop_sequences
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

def get_prompt(question):

    # Prompts are passed to LLMs as one string. We are building it out as separate strings for ease of understanding
    # Instruction
    instruction = "Answer this question briefly."
    # Examples to help the model set the context
    examples = "\n\nQuestion: What is the capital of Germany\nAnswer: Berlin\n\nQuestion: What year was George Washington born?\nAnswer: 1732\n\nQuestion: What are the main micro nutrients in food?\nAnswer: Protein, carbohydrates, and fat\n\nQuestion: What language is spoken in Brazil?\nAnswer: Portuguese \n\nQuestion: "
    # Question entered in the UI
    your_prompt = question
    # Since LLMs want to "complete a document", we're are giving it a "pattern to complete" - provide the answer
    end_prompt = "Answer:"

    final_prompt = instruction + examples + your_prompt + end_prompt

    return final_prompt

def answer_questions():

    # Set the api key and project id global variables
***REMOVED***

    # Web app UI - title and input box for the question
    st.title('🌠Test watsonx.ai LLM')
    user_question = st.text_input('Ask a question, for example: What is IBM?')

    # If the quesiton is blank, let's prevent LLM from showing a random fact, so we will ask a question
    if len(user_question.strip())==0:
        user_question="What is IBM?"

    # Get the prompt
    final_prompt = get_prompt(user_question)

    # Display our complete prompt - for debugging/understanding
    print(final_prompt)

    # Look up parameters in documentation:
    # https://ibm.github.io/watson-machine-learning-sdk/foundation_models.html#
    model_type = ModelTypes.FLAN_UL2
    max_tokens = 100
    min_tokens = 20
    decoding = DecodingMethods.GREEDY
    stop_sequences = ['.']

    # Get the model
    model = get_model(model_type, max_tokens, min_tokens, decoding,stop_sequences)

    # Generate response
    generated_response = model.generate(prompt=final_prompt)
    model_output = generated_response['results'][0]['generated_text']
    # For debugging
    print("Answer: " + model_output)

    # Display output on the Web page
    formatted_output = f***REMOVED***
        **Answer to your question:** {user_question} \
        *{model_output}*</i>
        ***REMOVED***
    st.markdown(formatted_output, unsafe_allow_html=True)

***REMOVED***
answer_questions()
