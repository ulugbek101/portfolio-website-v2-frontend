import type {Route} from "./+types/home";
import {useContext} from "react";
import {Context} from "~/store/context";
import Header from "~/components/index/Header";
import About from "~/components/index/About";

export function meta({}: Route.MetaArgs) {
    const {siteTitle} = useContext(Context);

  return [
      {title: `${siteTitle} Home`},
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  return <>
      <Header />
      <About />
  </>
}
