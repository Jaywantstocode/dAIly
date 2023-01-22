import cohere
from textmap import keyevents_prompt, closing

def insert_diary_entry(diary_entry: str) -> str:
  appended = keyevents_prompt + f'''
  "{diary_entry.strip()}"
  ''' + closing

  return appended