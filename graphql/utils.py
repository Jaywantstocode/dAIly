import cohere
from textmap import keyevents_prompt, key_closing, summarize_prompt, sum_closing

def insert_diary_entry(diary_entry: str) -> str:
  appended = keyevents_prompt + f'''
  "{diary_entry.strip()}"
  ''' + key_closing

  return appended

def summarize(info_str: str) -> str:
  appended = summarize_prompt + f'''
  "{info_str.strip()}"
  ''' + sum_closing

  return appended