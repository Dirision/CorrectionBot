import corrector
def main():
    lineA=""
    lineB=""
    print("Taking stdin")
    while(True):
        lineA = input("Input line: ")
        lineB = input("Correction you want to make: ")
        c = corrector.Corrector(lineA,lineB)
        print("Different letters: ")
        print(c.letterDiff(lineA,lineB))
        c.findWord()
        newLine=c.getCorrection()
        fix=corrector.correctionBot(lineA,lineB)
        print("Corrected line is:\n"+fix)
if __name__ == "__main__":
    main()