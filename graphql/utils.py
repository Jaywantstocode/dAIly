import cohere
import textmap

def insert_diary_entry(prompt: str, diary_entry: str) -> str:
  appended = prompt + f'''
  "{diary_entry.strip()}"
  JSON:
  '''

  return appended