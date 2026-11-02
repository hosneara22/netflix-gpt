import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
      <img
        className="w-44"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAdEhm1UzVexHjKqFOP9W6E2UVtkWFvL-vdxIEbTU81rsqNuPmDDy_dQvmQ85ath49JBruVV4aGQA3gY2Dl5SiqFf-AEwPAZBTNkW8FMxGXpDN2mHrf8KlRRiddj1P422ZW1eZkZNWLTd.svg"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 p-"
            //src="https://occ-0-6216-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWQLL7bT3pYDF0xKXID9tpW4PldTqv3UQKdTRZkA2-RWg7H8sxekkU5LOjLBZLmHSe5GoOaOjjokJgKpeEQQ-rS5VZsHg9Q.png?r=e6e"
            src={user?.photoURL}
            alt="usericon"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
