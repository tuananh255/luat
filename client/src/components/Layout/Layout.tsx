import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTranslationContext } from "../../context/TranslationContext";
export default function Layout() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const t = useTranslationContext();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      {location.pathname === "/trang-chu" ? (
        <Header type={true} t={t} changeLanguage={changeLanguage} />
      ) : (
        <Header type={false} t={t} changeLanguage={changeLanguage} />
      )}
      {/* <Header/>  */}
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
