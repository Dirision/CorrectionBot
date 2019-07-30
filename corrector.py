import re
class Corrector:
    """Contains the functionailty for the correction bot"""
    _line=""
    _correction = ""
    _lineDict={}

    def __init__():
        print("Building corrector\nNo Args Given")
    
    def __init__(self,inputLine):
        print("Building corrector\nLine Arg Given")
        self._line=inputLine
        self.generateNewDictionary()

    def __init__(self,inputLine, correctionLine):
        print("Building corrector\nLine Arg Given")
        self._line=inputLine
        self._correction=correctionLine
        #self.generateNewDictionary()

    def generateNewDictionary(self):
        for word in self._line:
            self._lineDict[word] = 0.0

    def newCorrection(self,new):
        self._correction=new

    '''
    Returns the sentance with the correction
    '''
    def getCorrection(self):
        word=findWord()
        
        
    '''
    Find the word within the sentance that relates most to the 'corrector' provided
    The value associated with each key is how close the correction is to the word 
    as a percentage 
    ex:
    lineA: this is a sentanec 
    lineB: sentance*
    dict: 
        this-2.4
        is-50
        a-0
        sentance-93.22

    calculation: 
        27 is the length of the longest word in the english dictionary 
        Therefore, the maximum distance between the longest word and 
        the shortest word is 26 characters
        score = abs( 26 - abs(corr - word))/26
    '''
    def findWord(self):
        curWord=""
        curMax=0.0
        for word in self._line.split():
            wordScore = abs(26-abs(len(self._correction)-len(word)))/26 * abs(len(word)-self.letterDiff(self._correction,word))/len(self._correction)
            print("Score for "+word+": "+str(wordScore))
    ''' 
    quickly get the number of letters that are unique to wordA that are in wordB
    '''
    def letterDiff(self, correction,oldLine):
        for letter in correction:
            oldLine = oldLine.replace(letter,'',1)
        return len(oldLine)
    