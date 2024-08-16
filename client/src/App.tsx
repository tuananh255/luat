import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Service from "./pages/Service/Service";
import Introduce from "./pages/Introduce/Introduce";
import ServicePrivate from "./pages/ServicePrivate/ServicePrivate";
import Recruitment from "./pages/Recruitment/Recruitment";
import RecruitingLawyers from "./pages/RecruitingLawyers/RecruitingLawyers";
import Personnel from "./pages/Personnel/Personnel";
import InforPersonnel from "./pages/InforPersonnel/InforPersonnel";
import Article from "./pages/Article/Article";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import Contact from "./pages/Contact/Contact";
import { TranslationProvider } from "./context/TranslationContext";
import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();
  return (
    <div className="w-full relative">
      <>
        <TranslationProvider t={t}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="trang-chu" element={<HomePage />} />
              <Route path="gioi-thieu" element={<Introduce />} />
              <Route path="dich-vu" element={<Service />} />
              <Route
                path="dich-vu/luat-su-rieng"
                element={<ServicePrivate />}
              />
              <Route path="tuyen-dung" element={<Recruitment />} />
              <Route
                path="tuyen-dung/luat-su-rieng"
                element={<RecruitingLawyers />}
              />
              <Route path="nhan-su" element={<Personnel />} />
              <Route
                path="nhan-su/luat-su-rieng"
                element={<InforPersonnel />}
              />

              <Route path="bai-viet" element={<Article />} />
              <Route path="bai-viet/:id" element={<ArticleDetail />} />

              <Route path="lien-he" element={<Contact />} />
            </Route>
          </Routes>
        </TranslationProvider>
      </>
    </div>
  );
}

export default App;
