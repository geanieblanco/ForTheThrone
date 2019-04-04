// sort leaders by total points
orderLeaderboard = ()=> {
    userRef.orderBy("totalPoints")
}


//onClick for each Character Card 
killCharacter = ()=> {
    userRef.where(this.characterName, "==", "dead")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            points +5;
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

walkerCharacter = ()=> {
    userRef.where(this.characterName, "==", "walker")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            points +7;
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

characterSurvived = ()=> {
    userRef.where(this.characterName, "==", "alive")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            points +10;
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}