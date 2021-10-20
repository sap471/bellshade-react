import React from "react";
import { api, dummyImage } from "../utils/constants";

export default class TeamMember extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const urlFetch = await fetch("https://bellshade-server.herokuapp.com");

    if (urlFetch.status == 200 && "json" in urlFetch) {
      this.setStateAsync({
        data: await urlFetch.json(),
      });
    }
  }

  setStateAsync(state) {
    return new Promise((resolve, reject) => {
      this.setState(state, resolve);
    });
  }

  render() {
    return (
      <section id="teams" className="mt-24 block group">
        <div className="h-full text-center">
          <div className="w-full mb-4">
            <h1 className="text-5xl font-extrabold top-0">Meet Our Team</h1>
          </div>
        </div>

        <div
          id="members"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {this.state.data.map((member, index) => (
            <div key={index} className="team-card m-5">
              <div
                className="mx-auto relative max-w-max tooltip top"
                data-pesan={member.login}
              >
                <div className="flex justify-center items-center overflow-hidden w-20 h-20 rounded-full shadow-md">
                  <img
                    className="w-full"
                    src={member.avatar_url + "&s=80"}
                    alt={member.login}
                  />
                </div>
                <a
                  className="absolute bottom-0 right-0 flex justify-center items-center rounded-full w-6 h-6 bg-white"
                  href={member.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
