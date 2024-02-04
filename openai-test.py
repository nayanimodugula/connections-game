from openai import OpenAI
import os
import json

client = OpenAI(api_key='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')

completion = client.chat.completions.create(
  model="gpt-3.5-turbo-0125",
  # response_format={ "type": "json_object" },
  messages=[
    {"role": "system", "content": "You are a writer for the New York Times connections game"},
    {"role": "user", "content": "Please group these sixteen terms into four groups of four and give group names. Put each new term on a new row: chicken, apple, broccoli, banana, chili, salt, beef, pork, spinach, carrot, orange, soy sauce, pepper, lamb, potato, cherry. In brackets include the chinese translation of each word"}
  ]
)
print(completion.choices[0].message.content)
# output_json = completion.choices[0].message.content
# save_file = open("ai_output", "w") 
# json.dump(output_json, save_file, indent = 6) 
# save_file.close()