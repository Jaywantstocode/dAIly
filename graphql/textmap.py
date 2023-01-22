
keyevents_prompt = """
Read the following diary entry and extract the following information:\n1. The date\n2. Key events\n\nFor example, for the following diary entry, as shown in quotes:\n\"Monday, January 17th, 2019\nToday was my first date with John. I was really excited but also a bit nervous. I spent hours getting ready and picking out the perfect outfit. I wanted to make a good impression.\nWe met at a cute little coffee shop downtown. As soon as I saw him, my heart started racing. He looked even better than his pictures! We sat down and started chatting. I was surprised at how easy it was to talk to him. Time flew by and before I knew it, we had been talking for over an hour.\nWe decided to take a walk in the park. The weather was perfect, and it was so nice to be out in the fresh air. We walked and talked, and I felt like I was getting to know him better and better. He was funny and smart, and I found myself laughing a lot.\nAfter the walk, we went to a nearby restaurant for dinner. The conversation continued to flow easily, and I enjoyed every moment of it. I felt a strong connection with him. He was attentive and considerate and I felt very comfortable around him.\nAs the night came to an end, I couldn\'t believe how well the date had gone. I was really sad to say goodbye and felt butterflies in my stomach as I left. I couldn\'t wait to see him again.\nOverall, it was a fantastic first date, and I can\'t wait to see where things go with John. I have a good feeling about this!\"\n\n
You would provide the following information, in JSON format:\n\n{\n \"Key events\": [ \"my first date\", \"met at a cute little coffee shop\", \"walk in the park\", \"went to a nearby restaurant\", \"butterflies in my stomach\"] \n}\n
Here is the diary entry:\n\n
"""

closing = """
You would provide the following information, in JSON format:\n
"""

summarize_prompt = """

"""
