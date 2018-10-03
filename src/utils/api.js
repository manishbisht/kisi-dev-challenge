import Kisi from "kisi-client"

const kisiClient = new Kisi();
kisiClient.setLoginSecret("94c2056abb993b570517f2d3a89c9b5a");

const API = {
    getLocks: () => {
        return kisiClient.get("locks");
    },
    changeLock: (data) => {
        return kisiClient.post("locks" + data);
    },
};

export default API;