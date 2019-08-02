# CorrectionBot
Source for a discord bot that corrects mistakes for users when they reply to a line with *

To use, add an * to the end of the word you want to correct from a previous message
Use '**' for quick help
Or atleast thats what I intended 



## Remarks:
- This project was intended to have some fun with code, nothing too serious. 
- It is currecntly littered with leftover comments, stuff I would think about then change or figure out won't work
- The Discord IO library was used to interface with the Discord api. This was a horrible choice
 - Discord IO provides only partial support for the discord api, there is a lot of functionality that is left over that I wish I could've used
 - Support is **very** limited, finding any examples or more informative descriptions of functions was limited to the gitbooks wiki that the creator made.
 - I can't really blame this library, albeit all my complaining. Searching "Discord bot tutorial" brought me to it, and there was nothing in the tutorial to prepare me for this library. It suggested no other libs, or even tried to compare the multitude of discord javascript libs available. So if stones are to be thrown, let them be thrown at shitty online tutorials.
 - Would I recommend this lib? Potentially, depends on usecase and javascript familiarity. I feel as though many of the functions can be made simpler, ex: add the function arguments as parameters to the function, rather than pass the function a json object containing the parameters. I get why this is so, but it is **very** unintuitive. 
- Discord bot making is kinda fun, although it can be hard coordinating bot tests against multiple users, or atleast seeing how it interacts with the server
- I know the word comparison algorithm is garbage, it was just a way to "fake" an auto-correct system 
- The project took two weeks of after work free time to complete, with the majority of it being prototyping the auto correct algorithm in python
- In the code the correction function is named with bot, which it was kind of intended to be. 
