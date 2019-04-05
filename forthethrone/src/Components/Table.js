const table = userData.map((user,key)=>
      <tr key={user.id}>
        <td key={user.name}>{user.name}</td>
        <td key={user.correctGuesses}>{user.correctGuesses}</td>
        <td key={user.incorrectGuesses}>{user.incorrectGuesses}</td>
        <td key={user.totalPoints}>{user.totalPoints}</td>
      </tr>
    );