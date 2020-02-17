import Today from "../containers/Today";
import Timer from "../containers/Timer";
import Search from "../containers/Search";
import Routine from "../containers/Routine";
import Mypage from "../containers/Mypage";
import Auth from "../containers/Auth";

const routes = [
  {
    path: "/",
    name: "오늘운동",
    component: Today,
    exact: true,
    inNavbar: true,
    icon: null
  },
  {
    path: "/timer",
    name: "타이머",
    component: Timer,
    inNavbar: true,
    icon: null
  },
  {
    path: "/search",
    name: "검색",
    component: Search,
    inNavbar: true,
    icon: null
  },
  {
    path: "/routine",
    name: "루틴",
    component: Routine,
    inNavbar: true,
    icon: null
  },
  {
    path: "/mypage",
    name: "My",
    component: Mypage,
    inNavbar: true,
    icon: null
  },
  {
    path: "/auth",
    name: "로그인",
    component: Auth,
    inNavbar: false,
    icon: null
  }
];

export default routes;
