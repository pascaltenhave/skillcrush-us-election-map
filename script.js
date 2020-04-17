var createPolitician = function (name, partyColor) {

        var politician = {};
        politician.name = name;
        politician.electionResults = null;
        politician.totalVotes = 0;
        politician.partyColor = partyColor;

        politician.tallyUpTotalVotes = function(){

        this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }

};
        return politician;
    };

var obama = createPolitician("Barack Obama", [132, 17, 11]);

var mcgovern = createPolitician("George McGovern", [245, 141, 136]);

console.log("Barack Obama's Party Color is", obama.partyColor);
console.log("George McGovern's Party Color is", mcgovern.partyColor);

obama.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

mcgovern.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

obama.electionResults[4] = 17;
mcgovern.electionResults[4] = 38;

obama.electionResults[9] = 1;
mcgovern.electionResults[9] = 28;

obama.electionResults[43] = 11;
mcgovern.electionResults[43] = 27;

console.log("votes obama:", obama.electionResults);
console.log("votes mcgovern:", mcgovern.electionResults);


var setStateResults = function(state){
  theStates[state].winner=null;

  if (obama.electionResults[state]>mcgovern.electionResults[state]){
      theStates[state].winner=obama;
}
  else if(obama.electionResults[state]<mcgovern.electionResults[state]){
      theStates[state].winner=mcgovern;
}


var stateWinner=theStates[state].winner;

  if (stateWinner !== null){
    theStates[state].rgbcolor = stateWinner.partyColor;
  }
  else{
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
} else {
    theStates[state].rgbColor = [11,32,57];
}
var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "("+theStates[state].nameAbbrev+")";
candidate1Name.innerText = obama.name;
candidate2Name.innerText = mcgovern.name;
candidate1Results.innerText = obama.electionResults[state];
candidate2Results.innerText = mcgovern.electionResults[state];

  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
    }
  else{
    winnersName.innerText = theStates[state].winner.name;
  }
};

obama.tallyUpTotalVotes();
mcgovern.tallyUpTotalVotes();

console.log("total votes obama:",  obama.totalVotes);
console.log("total votes mcgovern:", mcgovern.totalVotes);

var winner = "???";

if (obama.totalVotes>mcgovern.totalVotes){
    winner = obama.name;
} else if (obama.totalVotes<mcgovern.totalVotes){
    winner = mcgovern.name;
} else{
   winner = "Draw";
}

console.log("And the winner is:", winner);

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = obama.name;
row.children[1].innerText = obama.totalVotes;
row.children[2].innerText = mcgovern.name;
row.children[3].innerText = mcgovern.totalVotes;
row.children[5].innerText = winner;
