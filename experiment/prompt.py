import sys, os
import cohere
from SECRET import API_KEY
import datetime
#

prompt = '''
Read the following diary entry and extract the following information:
1. The date
2. A short summary of the key events, as a list of sentences.
3. The most important topics, in one or two words, as a list of words.

For example, for the following diary entry, as shown in quotes:
"Mon, Jan 17, 1996

Little Johnny opened his eyes for the first time today. He's an angel, looks just like his mother.

We went down by the icecream parlour on the way home — Mathilda's favourite flavour is chocolate; I'd better remember that!

I start my new job tomorrow. Working down by the docks. It'll be hard work, but the family will be more comfortable for it..."

You would provide the following information, in JSON format:

JSON: {
  "date":"01-17-1996",
  "key_events":["Jonny opened his eyes for the first time", "Mathilda's favourite icecream flavour is chocolate", "Started first job, working on the docks"]
  "themes":["Johnny's birth", "New job"]
}

Here's another diary entry:

'''

def insert_diary_entry(prompt: str, diary_entry: str) -> str:
  appended = prompt + f'''
  "{diary_entry.strip()}"

  JSON:
  '''

  return appended

co = cohere.Client(API_KEY)

samples_path = "samples"
log_file = "experiment/log.txt"
filenames = os.listdir(samples_path)


max_tokens=300
temperature=0.8


for file in filenames:
  with open(os.path.join(samples_path, file), 'r') as f:
    diary_entry = f.read()
    modified_prompt = insert_diary_entry(prompt, diary_entry)
    
    result = co.generate(
      model="command-xlarge-nightly",
      prompt=modified_prompt,
      max_tokens=max_tokens,
      temperature=temperature
    )

    with open(log_file, 'a') as log:
      log.write(f'''
++++ {datetime.datetime.now()}
Model properties"
{max_tokens=}
{temperature=}

Prompt:
{modified_prompt}


Result:
{result[0].text}
++++
''')

    input("Press any key to continue.")

 

