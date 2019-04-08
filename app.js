// document.querySelector(".card-flip").classList.toggle("flip");

var config = {
    apiKey: "AIzaSyCqgkzgZjP5UoW9jrL6FioYwI5k_H86fP0",
    authDomain: "forthethrone-8c01f.firebaseapp.com",
    databaseURL: "https://forthethrone-8c01f.firebaseio.com",
    projectId: "forthethrone-8c01f",
    storageBucket: "forthethrone-8c01f.appspot.com",
    messagingSenderId: "726563823071"
    };

firebase.initializeApp(config);

var db = firebase.firestore();

//document references
userRef = ()=> db.collection("users");
characterRef = ()=> db.collection("characters");
Arya = ()=> db.collection("characters").doc("Arya");
Gendry = ()=> db.collection("characters").doc("Gendry");
Brienne = ()=> db.collection("characters").doc("Brienne");
Sansa = ()=> db.collection("characters").doc("Sansa");
Podrick = ()=> db.collection("characters").doc("Podrick");
Tyrion = ()=> db.collection("characters").doc("Tyrion");
Daenerys = ()=> db.collection("characters").doc("Daenerys");
Jon = ()=> db.collection("characters").doc("Jon");
Davos = ()=> db.collection("characters").doc("Davos");
Missandei = ()=> db.collection("characters").doc("Missandei");
Greyworm = ()=> db.collection("characters").doc("Greyworm");
Beric = ()=> db.collection("characters").doc("Beric");
Varys = ()=> db.collection("characters").doc("Varys");
Cersei = ()=> db.collection("characters").doc("Cersei");
Jaime = ()=> db.collection("characters").doc("Jaime");
Mountain = ()=> db.collection("characters").doc("Mountain");
Qyburn = ()=> db.collection("characters").doc("Qyburn");
Hound = ()=> db.collection("characters").doc("Hound");
Melisandre = ()=> db.collection("characters").doc("Melisandre");
Gilly = ()=> db.collection("characters").doc("Gilly");
Baby = ()=> db.collection("characters").doc("Baby");
Sam = ()=> db.collection("characters").doc("Sam");
Greyworm = ()=> db.collection("characters").doc("Greyworm");
Bronn = ()=> db.collection("characters").doc("Bronn");
Euron = ()=> db.collection("characters").doc("Euron");
Bran = ()=> db.collection("characters").doc("Bran");
King = ()=> db.collection("characters").doc("King");
Tormund = ()=> db.collection("characters").doc("Tormund");
Theon = ()=> db.collection("characters").doc("Theon");
Tyrion = ()=> db.collection("characters").doc("Tyrion");
Yara = ()=> db.collection("characters").doc("Yara");

characterData = [];
userData= [];
leaderboard = [];
leader = [];

getCharacterData = ()=> {
    db.collection("characters").get().then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
            characterData.push(doc.data());
            });
        });
}

getUserData = ()=> {
    db.collection("users").get().then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
            userData.push(doc.data());
            });
        });
}

getLeaderData = ()=> {
    db.collection("users").orderBy("totalPoints").limit(1).get().then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
            leader.push(doc.data());
        })
    })
}

getLeaderData = ()=> {
    db.collection("users").orderBy("totalPoints").limit(1).get().then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
            leader.push(doc.data());
        })
    })
}

getBoardData = ()=> {
    db.collection("users").orderBy("totalPoints").get().then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
            leaderboard.push(doc.data());
        })
    })
}

getCharacterData();
getUserData();
// getLeaderData();
getBoardData();



$(window).ready(function () {
    $('#launchmodal').modal('show', {backdrop: 'static', keyboard: false});
});
