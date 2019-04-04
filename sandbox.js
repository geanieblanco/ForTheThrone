class Leaderboard extends React.Component{
  render() {
    const crown = userData.map((user, key)=>
      <div className="jumbotron">
      <svg
          class="crown"
          id={user.loyalty}
          width="12px"
          height="9px"
          viewBox="0 0 12 9"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="{1}" fillRule="evenodd">
            <g id="Group" fill="#1C1E1F">
              <path
                d="M0.5,4.325 C0.318,4.325 0.172,4.179 0.172,3.997 C0.172,3.815 0.318,3.669 0.5,3.669 C0.68,3.669 0.828,3.815 0.828,3.997 C0.828,4.179 0.68,4.325 0.5,4.325 Z"
                id="Fill-12"
              />
              <path
                d="M10.813,4.325 C10.632,4.325 10.485,4.179 10.485,3.997 C10.485,3.815 10.632,3.669 10.813,3.669 C10.994,3.669 11.141,3.815 11.141,3.997 C11.141,4.179 10.994,4.325 10.813,4.325 Z"
                id="Fill-13"
              />
              <path
                d="M2.649,2.935 C2.468,2.935 2.321,2.789 2.321,2.607 C2.321,2.426 2.468,2.279 2.649,2.279 C2.831,2.279 2.977,2.426 2.977,2.607 C2.977,2.789 2.831,2.935 2.649,2.935 Z"
                id="Fill-14"
              />
              <path
                d="M8.687,2.935 C8.505,2.935 8.359,2.789 8.359,2.607 C8.359,2.426 8.505,2.279 8.687,2.279 C8.867,2.279 9.015,2.426 9.015,2.607 C9.015,2.789 8.867,2.935 8.687,2.935 Z"
                id="Fill-15"
              />
              <path
                d="M5.578,1.154 C5.259,1.154 5.001,0.896 5.001,0.577 C5.001,0.258 5.259,0 5.578,0 C5.897,0 6.156,0.258 6.156,0.577 C6.156,0.896 5.897,1.154 5.578,1.154 Z"
                id="Fill-16"
              />
              <path
                d="M9.266,7.807 L9.46,7.313 L9.85,6.324 L10.045,5.83 L10.813,3.977 L8.465,5.83 L8.675,2.589 L6.998,5.602 L5.583,0.513 L4.221,5.435 L2.637,2.589 L2.847,5.83 L0.5,3.977 L1.267,5.83 L1.463,6.324 L1.852,7.313 L2.047,7.807 L2.238,8.293 C4.512,7.86 6.841,7.829 9.128,8.156 L9.266,7.807 Z"
                id="Fill-17"
              />
            </g>
          </g>
        </svg>
        <h2>{user.name}</h2>
      </div>
    );
    return (
      <div className="leaderboard">
        {crown}
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Correct Deaths</th>
                  <th scope="col">Correct White Walker</th>
                  <th scope="col">Total Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>3</td>
                  <td>4</td>
                  <td>35</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>1</td>
                  <td>0</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>2</td>
                  <td>1</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};
