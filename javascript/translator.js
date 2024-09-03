const EnglishToBraille = {
    "A": "O.....",
    "B": "O.O...",
    "C": "OO....",
    "D": "OO.O..",
    "E": "O..O..",
    "F": "OOO...",
    "G": "OOOO..",
    "H": "O.OO..",
    "I": ".OO...",
    "J": ".OOO..",
    "K": "O...O.",
    "L": "O.O.O.",
    "M": "OO..O.",
    "N": "OO.OO.",
    "O": "O..OO.",
    "P": "OOO.O.",
    "Q": "OOOOO.",
    "R": "O.OOO.",
    "S": ".OO.O.",
    "T": ".OOOO.",
    "U": "O...OO",
    "V": "O.O.OO",
    "W": ".OOO.O",
    "X": "OO..OO",
    "Y": "OO.OOO",
    "Z": "O..OOO",
    "1": "O.....",
    "2": "O.O...",
    "3": "OO....",
    "4": "OO.O..",
    "5": "O..O..",
    "6": "OOO...",
    "7": "OOOO..",
    "8": "O.OO..",
    "9": ".OO...",
    "0": ".OOO..",
    "cap": ".....O",
    "num": ".O.OOO",
    ".": "..OO.O",
    ",": "..O...",
    "?": "..O.OO",
    "!": "..OOO.",
    ":": "..OO..",
    ";": "..O.O.",
    "-": "....OO",
    "/": ".O..O.",
    "<": ".OO..O",
    ">": "O..OO.",
    "(": "O.O..O",
    ")": ".O.OO.",
    " ": "......"
};

const BrailleToEnglish = {
    "O.....": ["a", "A", "1"],
    "O.O...": ["b", "B", "2"],
    "OO....": ["c", "C", "3"],
    "OO.O..": ["d", "D", "4"],
    "O..O..": ["e", "E", "5"],
    "OOO...": ["f", "F", "6"],
    "OOOO..": ["g", "G", "7"],
    "O.OO..": ["h", "H", "8"],
    ".OO...": ["i", "I", "9"],
    ".OOO..": ["j", "J", "0"],
    "O...O.": ["k", "K"],
    "O.O.O.": ["l", "L"],
    "OO..O.": ["m", "M"],
    "OO.OO.": ["n", "N"],
    "O..OO.": ["o", "O", ">"],
    "OOO.O.": ["p", "P"],
    "OOOOO.": ["q", "Q"],
    "O.OOO.": ["r", "R"],
    ".OO.O.": ["s", "S"],
    ".OOOO.": ["t", "T"],
    "O...OO": ["u", "U"],
    "O.O.OO": ["v", "V"],
    ".OOO.O": ["w", "W"],
    "OO..OO": ["x", "X"],
    "OO.OOO": ["y", "Y"],
    "O..OOO": ["z", "Z"],
    ".....O": ["cap"],
    ".O...O": ["dec"],
    ".O.OOO": ["num"],
    "..OO.O": ["."],
    "..O...": [","],
    "..O.OO": ["?"],
    "..OOO.": ["!"],
    "..OO..": [":"],
    "..O.O.": [";"],
    "....OO": ["-"],
    ".O..O.": ["/"],
    ".OO..O": ["<"],
    "O.O..O": ["("],
    ".O.OO.": [")"],
    "......": [" "]
};

const args = process.argv.slice(2);

if (args.length > 0) {
    const input = args.join(' ');
    //Braile to English
    if (input.slice(0,6) in BrailleToEnglish) {

        capLock=false;
        numLock=false;
        decLock=false;
        ans=""
        for (let i = 0; i < input.length; i+=6) {
            element = input.slice(i,i+6);

            if(element==EnglishToBraille["cap"]){
                capLock=true;
                continue;
            }else if(element==EnglishToBraille["num"]){
                numLock=true;
                continue;
            }else if(BrailleToEnglish[element]=="dec"){
                continue;
            }else if(element==EnglishToBraille[" "]){
                numLock=false;
            }

            if(capLock){
                
                ans+=BrailleToEnglish[element][1];
                capLock=false;
            }else if(numLock){
                ans+=BrailleToEnglish[element][2];
            }else{
                ans+=BrailleToEnglish[element][0];
            }

        }

        console.log(ans);



    } else {
        //English to Braile
        
        
        ans=""
        for (let i = 0; i < input.length; i++) {
            
            character=input[i];
            
            if(/[A-Z]/.test(character)){
                
                ans+=EnglishToBraille["cap"];
            }else if(/[0-9]/.test(character)){
                
                ans+=EnglishToBraille["num"];
            }
            
            ans+=EnglishToBraille[character.toUpperCase()];
        }
        console.log(ans);

    }
} else {
    console.log("Error no String");
}
