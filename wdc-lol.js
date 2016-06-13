(function(){
	//Create our connector object
	var myConnector = tableau.makeConnector();

	//Declare our Schema and Table Info
	myConnector.getSchema = function(schemaCallback){
		var cols = [
			{ id:  "assists", alias: "Assists", dataType : tableau.dataTypeEnum.int},
			{ id:  "barracksKilled", alias: "Inhibitors Killed", dataType : tableau.dataTypeEnum.int},	
			{ id:  "bountyLevel", alias: "Bounty Level", dataType : tableau.dataTypeEnum.int},	
			{ id:  "championsKilled", alias: "Champion Kills", dataType : tableau.dataTypeEnum.int},
			{ id:  "combatPlayerScore", alias: "Combat Player Score", dataType : tableau.dataTypeEnum.int},
			{ id:  "consumablesPurchased", alias: "Consumables Purchased", dataType : tableau.dataTypeEnum.int},	
			{ id:  "damageDealtPlayer", alias: "Damage Dealt by Player", dataType : tableau.dataTypeEnum.int},	
			{ id:  "doubleKills", alias: "Double Kills", dataType : tableau.dataTypeEnum.int},
			{ id:  "firstBlood", alias: "First Blood", dataType : tableau.dataTypeEnum.int},
			{ id:  "gold", alias: "Gold", dataType : tableau.dataTypeEnum.int},
			{ id:  "goldEarned", alias: "Gold Earned", dataType : tableau.dataTypeEnum.int},
			{ id:  "goldSpent", alias: "Gold Spent", dataType : tableau.dataTypeEnum.int},
			{ id:  "item0", alias: "Item 0", dataType : tableau.dataTypeEnum.int},
			{ id:  "item1", alias: "Item 1", dataType : tableau.dataTypeEnum.int},
			{ id:  "item2", alias: "Item 2", dataType : tableau.dataTypeEnum.int},
			{ id:  "item3", alias: "Item 3", dataType : tableau.dataTypeEnum.int},
			{ id:  "item4", alias: "Item 4", dataType : tableau.dataTypeEnum.int},
			{ id:  "item5", alias: "Item 5", dataType : tableau.dataTypeEnum.int},
			{ id:  "item6", alias: "Item 6", dataType : tableau.dataTypeEnum.int},
			{ id:  "itemsPurchased", alias: "Items Purchased", dataType : tableau.dataTypeEnum.int},	
			{ id:  "killingSprees", alias: "Killing Sprees", dataType : tableau.dataTypeEnum.int},	
			{ id:  "largestCriticalStrike", alias: "Largest Critical Strike", dataType : tableau.dataTypeEnum.int},	
			{ id:  "largestKillingSpree", alias: "Largest Killing Spree", dataType : tableau.dataTypeEnum.int},	
			{ id:  "largestMultiKill", alias: "Largest Multi Kill", dataType : tableau.dataTypeEnum.int},	
			{ id:  "legendaryItemsCreated", alias: "Legendary Items Created", dataType : tableau.dataTypeEnum.int},	
			{ id:  "level", alias: "Level", dataType : tableau.dataTypeEnum.int},	
			{ id:  "magicDamageDealtPlayer", alias: "Magic Damage Dealt By Player", dataType : tableau.dataTypeEnum.int},	
			{ id:  "magicDamageDealtToChampions", alias: "Magic Damage Dealt to Champions", dataType : tableau.dataTypeEnum.int},	
			{ id:  "magicDamageTaken", alias: "Magic Damage Taken", dataType : tableau.dataTypeEnum.int},	
			{ id:  "minionsDenied", alias: "Minions Denied", dataType : tableau.dataTypeEnum.int},	
			{ id:  "minionsKilled", alias: "Minions Killed", dataType : tableau.dataTypeEnum.int},	
			{ id:  "neutralMinionsKilled", alias: "Neutral Minion Kills", dataType : tableau.dataTypeEnum.int},	
			{ id:  "neutralMinionsKilledEnemyJungle", alias: "Neutral Minions Killed Enemy Jungle", dataType : tableau.dataTypeEnum.int},	
			{ id:  "neutralMinionsKilledYourJungle", alias: "Neutral Minions Killed Your Jungle", dataType : tableau.dataTypeEnum.int},	
			{ id:  "nexusKilled", alias: "Nexus Killed", dataType : tableau.dataTypeEnum.bool},	
			{ id:  "nodeCapture", alias: "Node Captures", dataType : tableau.dataTypeEnum.int},	
			{ id:  "nodeCaptureAssist", alias: "Node Capture Assists", dataType : tableau.dataTypeEnum.int},	
			{ id:  "nodeNeutralize", alias: "Nodes Neutralized", dataType : tableau.dataTypeEnum.int},	
			{ id:  "nodeNeutralizeAssist", alias: "Node Neutralized Assists", dataType : tableau.dataTypeEnum.int},	
			{ id:  "numDeaths", alias: "Number of Deaths", dataType : tableau.dataTypeEnum.int},	
			{ id:  "numItemsBought", alias: "Number of Items Bought", dataType : tableau.dataTypeEnum.int},	
			{ id:  "objectivePlayerScore", alias: "Objective Player Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "pentaKills", alias: "Pentakills", dataType : tableau.dataTypeEnum.int},	
			{ id:  "physicalDamageDealtPlayer", alias: "Physical Damage Dealt by Player", dataType : tableau.dataTypeEnum.int},	
			{ id:  "physicalDamageDealtToChampions", alias: "Physical Damage Dealt to Champions", dataType : tableau.dataTypeEnum.int},	
			{ id:  "physicalDamageTaken", alias: "Physical Damage Taken", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerPosition", alias: "Player Position", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerRole", alias: "Player Role", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore0", alias: "Player 0 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore1", alias: "Player 1 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore2", alias: "Player 2 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore3", alias: "Player 3 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore4", alias: "Player 4 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore5", alias: "Player 5 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore6", alias: "Player 6 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore7", alias: "Player 7 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore8", alias: "Player 8 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "playerScore9", alias: "Player 9 Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "quadraKills", alias: "Quadra Kills", dataType : tableau.dataTypeEnum.int},
			{ id:  "sightWardsBought", alias: "Sight Wards Bought", dataType : tableau.dataTypeEnum.int},
			{ id:  "spell1Cast", alias: "Spell 1 Casts", dataType : tableau.dataTypeEnum.int},	
			{ id:  "spell2Cast", alias: "Spell 2 Casts", dataType : tableau.dataTypeEnum.int},	
			{ id:  "spell3Cast", alias: "Spell 3 Casts", dataType : tableau.dataTypeEnum.int},	
			{ id:  "spell4Cast", alias: "Spell 4 Casts", dataType : tableau.dataTypeEnum.int},	
			{ id:  "summonSpell1Cast", alias: "Summoner Spell 1 Casts", dataType : tableau.dataTypeEnum.int},	
			{ id:  "summonSpell2Cast", alias: "Summoner Spell 2 Casts", dataType : tableau.dataTypeEnum.int},	
			{ id:  "superMonsterKilled", alias: "Super Monster Kills", dataType : tableau.dataTypeEnum.int},	
			{ id:  "team", alias: "Team", dataType : tableau.dataTypeEnum.int},	
			{ id:  "teamObjective", alias: "Team Objective", dataType : tableau.dataTypeEnum.int},	
			{ id:  "timePlayed", alias: "Time Played", dataType : tableau.dataTypeEnum.int},	
			{ id:  "totalDamageDealt", alias: "Total Damage Dealt", dataType : tableau.dataTypeEnum.int},	
			{ id:  "totalDamageDealtToChampions", alias: "Total Damage Dealt to Champions", dataType : tableau.dataTypeEnum.int},	
			{ id:  "totalDamageTaken", alias: "Total Damage Taken", dataType : tableau.dataTypeEnum.int},	
			{ id:  "totalHeal", alias: "Total Heal", dataType : tableau.dataTypeEnum.int},	
			{ id:  "totalPlayerScore", alias: "Total Player Score", dataType : tableau.dataTypeEnum.int},	
			{ id:  "totalScoreRank", alias: "Total Score Rank", dataType : tableau.dataTypeEnum.int},	
			{ id:  "totalTimeCrowdControlDealt", alias: "Total Crowd Control Time Dealt", dataType : tableau.dataTypeEnum.int},	
			{ id:  "totalUnitsHealed", alias: "Total Units Healed", dataType : tableau.dataTypeEnum.int},	
			{ id:  "tripleKills", alias: "Triple Kills", dataType : tableau.dataTypeEnum.int},	
			{ id:  "trueDamageDealtPlayer", alias: "True Damage Dealt by Player", dataType : tableau.dataTypeEnum.int},	
			{ id:  "trueDamageDealtToChampions", alias: "True Damage Dealt to Champions", dataType : tableau.dataTypeEnum.int},	
			{ id:  "trueDamageTaken", alias: "True Damage Taken", dataType : tableau.dataTypeEnum.int},	
			{ id:  "turretsKilled", alias: "Turrets Killed", dataType : tableau.dataTypeEnum.int},	
			{ id:  "unrealKills", alias: "Unreal Kills", dataType : tableau.dataTypeEnum.int},	
			{ id:  "victoryPointTotal", alias: "Victory Point Total", dataType : tableau.dataTypeEnum.int},	
			{ id:  "visionWardsBought", alias: "Vision Wards Bought", dataType : tableau.dataTypeEnum.int},	
			{ id:  "wardKilled", alias: "Wards Killed", dataType : tableau.dataTypeEnum.int},	
			{ id:  "wardPlaced", alias: "Wards Placed", dataType : tableau.dataTypeEnum.int},	
			{ id:  "win", alias: "Win", dataType : tableau.dataTypeEnum.bool},

			{ id:  "championId", alias: "Champion ID", dataType : tableau.dataTypeEnum.int},	
			{ id:  "createDate", alias: "Create Date", dataType : tableau.dataTypeEnum.date},	
			{ id:  "gameId", alias: "Game ID", dataType : tableau.dataTypeEnum.int},
			{ id:  "gameMode", alias: "Game Mode", dataType : tableau.dataTypeEnum.string},	
			{ id:  "gameType", alias: "Game Type", dataType : tableau.dataTypeEnum.string},
			{ id:  "ipEarned", alias: "IP Earned", dataType : tableau.dataTypeEnum.int},
			{ id:  "level", alias: "Level", dataType : tableau.dataTypeEnum.int},
			{ id:  "mapId", alias: "Map ID", dataType : tableau.dataTypeEnum.int},
			{ id:  "spell1", alias: "Summoner Spell 1", dataType : tableau.dataTypeEnum.int},
			{ id:  "spell2", alias: "Summoner Spell 2", dataType : tableau.dataTypeEnum.int},
			{ id:  "subType", alias: "Sub Type", dataType : tableau.dataTypeEnum.string},
			{ id:  "teamId", alias: "Team ID", dataType : tableau.dataTypeEnum.int},

			{ id:  "player", alias: "Player Name", dataType : tableau.dataTypeEnum.string},
			{ id:  "matchnum", alias: "Match #", dataType : tableau.dataTypeEnum.int}
			]

		var tableInfo = {
			id: "lolMatchStats",
			alias: "League of Legends Match Statistics",
			columns: cols
		};
		schemaCallback([tableInfo]);
	};

	//Get our data from reddit and set up our table data
	myConnector.getData = function(table, doneCallback){
		var dataobj = JSON.parse(tableau.connectionData);
		jsonEntry(dataobj, function(dataobj){
			var tableData = [];
			for(var i = 0; i < dataobj.length; i++){
				var player = dataobj[i].name;
				var data = dataobj[i].data;
				for(var j = 0; j < data.games.length; j++){
					var currMatch = data.games[j];
					var matchnumber = j;
					var entry = {};

					Object.getOwnPropertyNames(currMatch).forEach(function(val, idx, array){
						if(val != "fellowPlayers" & val != "stats")
							entry[val] = currMatch[val];
					});
					var currstats = currMatch.stats;
					Object.getOwnPropertyNames(currstats).forEach(function(val, idx, array){
						entry[val] = currstats[val];
					});
					entry.createDate = epochConv(entry.createDate);
					entry.player = player;
					entry.matchnum = matchnumber;
					tableData.push(entry);
				}
			}
			tableau.log("Table Done");

			table.appendRows(tableData);
			doneCallback();
		});
	};
	tableau.registerConnector(myConnector);
})();

//Converts Epoch time format into a Tableau recognizable format

function epochConv(epoch){
	var date = new Date(epoch);
	return date.toLocaleDateString();
}

//Entry point for data collection

function jsonEntry(dataobj, retfunction){
	var data = [];
	var index = 0;
	for(var i = 0; i < dataobj.summoners.length; i++){
		data[i] = {};
		data[i].name = dataobj.summoners[i];
	}
	recurseID(data, dataobj.summoners, index, dataobj.locale, retfunction);
}

//Get the IDs for all players

function recurseID(data, summoners, index, locale, retfunction){
	getID(summoners, index, locale, retfunction).then(function(id){
		data[index].id = id;
		index++;
		if(index < summoners.length)
			recurseID(data, summoners, index, locale, retfunction); //recurse if we have more IDs to find
		else {
			index = 0;
			recurseMatches(data, index, locale, retfunction);//else we are done finding IDs and we can now get our match data
		}
	});
}

//Create promise that will return the SummonerID for input player

function getID(summoners, index, region, retfunction){
	var promise = new Promise(function(resolve, reject){
		var summonerName = summoners[index];
		tableau.log("ID Retrieval Start for: "+summonerName);
		var corsUrl = "https://na.api.pvp.net/api/lol/"+region+"/v1.4/summoner/by-name/"+summonerName+"?api_key=720a7e45-4aed-42ae-9301-fb9823fdb2f7";
		$.getJSON(corsUrl, function(val){
			var sid = val[Object.keys(val)[0]].id;
			resolve(sid);
		}).fail(function(jqxhr, textStatus, error){
			alert(" Error, Summoner Non-Existant, please try again.");
		});
	});
	return promise;
}

//Get the match data for all players

function recurseMatches(data, index, locale, retfunction){
	getMatches(data[index].id, locale, retfunction).then(function(matchData){
		data[index].data = matchData;
		index++;
		if(index < data.length)
			recurseMatches(data, index, locale, retfunction);
		else
			retfunction(data);
	});
}

//Create promise that will return our match data for the input player

function getMatches(summonerID, region, retfunction){
	var promise = new Promise(function(resolve, reject){
		tableau.log("Data Retrieval Start for ID: "+summonerID);
		var corsUrl = "https://na.api.pvp.net/api/lol/"+region+"/v1.3/game/by-summoner/"+summonerID+"/recent?api_key=720a7e45-4aed-42ae-9301-fb9823fdb2f7";
		$.getJSON(corsUrl, function(val){
			resolve(val);
		}).fail(function(){
			alert("404 Error, Data Non-Existant, please try again.");
		});
	});
	return promise;
}

//Checks for empty input and sets a default summoner if it is left empty, then submits to the connector

function validate(){
	tableau.connectionData = $("#summoner").val();
	var dataobj = {};
	dataobj.locale = $("#locale").val();
	if($("#locale").val().replace(/^\s+|\s+$/g, "").length == 0){
		dataobj.locale = "na";
		alert("No region set, defaulting to NA");
	}
	if($("#summoner").val().replace(/^\s+|\s+$/g, "").length == 0){
		tableau.connectionData = "dyrus";
		alert("No Summoner Selected, defaulting to 'Dyrus'");
	} else {
		var summonerarr = $("#summoner").val().split(",");
		if(summonerarr.length > 5){
			alert("More than 5 inputs detected! Upper limit is 5. Please edit and resubmit");
			return;
		}
		for(var i = 0; i < summonerarr.length; i++){
			summonerarr[i] = summonerarr[i].replace(/\s/g, '');
		}
		dataobj.summoners = summonerarr;
		tableau.connectionData = JSON.stringify(dataobj);
	}
	tableau.submit();
}