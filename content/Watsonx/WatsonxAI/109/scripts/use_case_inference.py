***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
This example shows several examples of inference with LLMs
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

TASK_SENTIMENT = "Sentiment"
TASK_EMOTIONS = "Emotions"
TASK_ENTITY = "Entities"

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

# This function creates a model object with the specified parameters
def get_model(model_type,max_tokens,min_tokens,decoding,temperature,repetition_penalty):

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***,
        GenParams.REPETITION_PENALTY:repetition_penalty
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


***REMOVED***

***REMOVED***
    # Source of this review: https://www.consumeraffairs.com

***REMOVED***

    # service_review = f***REMOVED***
    # This is a great full service hotel. But, amazingly they do not have an oceanfront handicap accessible room.
    # I rented 4 rooms for a family get together, but for us, the parents/grandparents who sponsored and paid
    # for this otherwise fun occasion, we had to struggle with too low toilets, (they brought a riser),
    # not being able to use shower or even sink, impossible doors, and no access to deck,
    # just so we could have an oceanfront room. Yes we knowingly made that trade,
    # but a hotel of this caliber in this America in this day and age could surely
    # offer a handicap accessible room in each major room category.
    # I am disappointed in Hilton, even as a gold honors member.
    # They could do better for those of us less fortunate.
    # ***REMOVED***

    service_review = f***REMOVED***
    We used the Hilton Waikoloa's pool and slide while vacationing at the HGV Kingsland. 
    The property was really overwhelming and quite huge. They had a train and boat to get 
    around since it was so big. Our girls loved the slide at the pool and also swimming with the dolphins. 
    The lagoon kiosk rented some snorkels which was very easy since there were no waves inside the lagoon. 
    Lots of turtles there! Food was the only downside as it is very expensive. 
    But I guess it was expected since it is Hawaii. We would love to return once they have 
    the Oceans Tower timeshares built for the HGV Club. Especially with the ocean views!
    ***REMOVED***

***REMOVED***

# This function creates a complete prompt
def get_prompt(service_review, task_type):

***REMOVED***

    if task_type == TASK_SENTIMENT:
        complete_prompt = f***REMOVED***
            What is the sentiment of the following product review, which is delimited by '''.
            Answer with a single word, either "positive" or "negative".
    ***REMOVED***
            ***REMOVED***
    elif task_type == TASK_EMOTIONS:
        complete_prompt = f***REMOVED***
            Identify a list of emotions in text delimited by '''. 
            Include no more than 5 items in the list. 
            Format your answer as a list of lower-case words separated by commas.
    ***REMOVED***
            ***REMOVED***
    elif task_type == TASK_ENTITY:
        complete_prompt = f***REMOVED***
            Identify the following items from the review text: city, hotel name
    ***REMOVED***
            ***REMOVED***
***REMOVED***
        # Provide a summary of the review
        complete_prompt = f***REMOVED***
            Generate a short summary of a service review to give feedback to the customer service department.
    ***REMOVED***
    ***REMOVED***
            ***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
    model_type = ModelTypes.FLAN_UL2
    max_tokens = 70
    min_tokens = 30
    decoding = DecodingMethods.GREEDY
***REMOVED***
    # Max repition penalty, 1 is min
    repetition_penalty = 2

***REMOVED***
***REMOVED***

***REMOVED***
    model = get_model(model_type, max_tokens, min_tokens, decoding, temperature,repetition_penalty)

    # Get sample review
***REMOVED***

    # Construct prompts
    complete_prompt1 = get_prompt(review, TASK_SENTIMENT)
    complete_prompt2 = get_prompt(review, TASK_EMOTIONS)
    complete_prompt3 = get_prompt(review, TASK_ENTITY)

    # Invoke the model
    generated_response = model.generate(prompt=complete_prompt1)
***REMOVED***
***REMOVED***
    print("--------------------------------- Sentiment -----------------------------------")
    print("Prompt: " + complete_prompt1.strip())
***REMOVED***
    print("Review sentiment: " + response_text)
***REMOVED***

    # Emotions
    generated_response = model.generate(prompt=complete_prompt2)
***REMOVED***
***REMOVED***
    print("--------------------------------- Emotions -----------------------------------")
    print("Prompt: " + complete_prompt2.strip())
***REMOVED***
    print("Emotions: " + response_text)
***REMOVED***

    # Entity
    generated_response = model.generate(prompt=complete_prompt3)
***REMOVED***
***REMOVED***
    print("--------------------------------- Entities -----------------------------------")
    print("Prompt: " + complete_prompt3.strip())
***REMOVED***
    print("Entities Summary: " + response_text)
***REMOVED***

    # Test the function that will be invoked from the module
    # Test modular function invocation
    extract(api_key, watsonx_project_id, review, TASK_ENTITY,model_type)

# Function that can be invoked from external modules
def extract(request_api_key, request_project_id, review, task_type,model_type):

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
    max_tokens = 100
    min_tokens = 30
    decoding = DecodingMethods.GREEDY
***REMOVED***
    # Max repition penalty, 1 is min
    repetition_penalty = 2

***REMOVED***
    model = get_model(model_type, max_tokens, min_tokens, decoding, temperature, repetition_penalty)

    # Construct the prompt
    complete_prompt = get_prompt(review, task_type)

    # Invoke the model
***REMOVED***
***REMOVED***

    return response_text

***REMOVED***
***REMOVED***
***REMOVED***
