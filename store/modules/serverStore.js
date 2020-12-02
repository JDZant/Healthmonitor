const state = {
  servers: [
    {
      id: "s1",
      name: "Server 1",
      address: "192.168.1.1",
      status: "Online",
      isOnline: true,
      cpu: "25%",
      ram: "34%",
      disk: "65%",
    },
    {
      id: "s2",
      name: "Server 2",
      address: "192.168.1.2",
      status: "Online",
      isOnline: true,
      cpu: "25%",
      ram: "11%",
      disk: "84%",
    },
    {
      id: "s3",
      name: "Server 3",
      address: "192.168.1.2",
      status: "Offline",
      isOnline: false,
      cpu: "0%",
      ram: "0%",
      disk: "0%",
    },
    {
      id: "s4",
      name: "Server 4 ",
      address: "192.168.1.2",
      status: "Offline",
      isOnline: false,
      cpu: "0%",
      ram: "0%",
      disk: "0%",
    },
  ],
};

const getters = {
  getServerList: (state) => {
    return state.servers;
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
