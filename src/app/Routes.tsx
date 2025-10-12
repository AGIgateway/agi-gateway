import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "@/features/landing"
import SimplePage from "@/features/page"
import PrivacyPolicyPage from "@/features/policy/PrivacyPolicyPage"
import TermsOfUsePage from "@/features/policy/TermsOfUsePage"
import MainLayout from "./layout/MainLayout"
import AdmissionSupport from "@/features/services/AdmissionSupport"
import VisaSupport from "@/features/services/VisaSupport"
import TestPreparation from "@/features/services/TestPreparation"
import CourseGuidance from "@/features/services/CourseGuidance"
import FuturePathways from "@/features/services/FuturePathways"
import PredepartureServices from "@/features/services/PredepartureServices"
import StudentAssessmentPage from "@/features/assessment/StudentAssessmentPage"

// Route config
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/page", element: <SimplePage /> },
  { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
  { path: "/terms-of-use", element: <TermsOfUsePage /> },
  { path: "/services/admission-support", element: <AdmissionSupport /> },
  { path: "/services/visa-consultation", element: <VisaSupport /> },
  { path: "/services/test-preparations", element: <TestPreparation /> },
  { path: "/services/language-training", element: <CourseGuidance /> },
  { path: "/services/future-pathways", element: <FuturePathways /> },
  { path: "/services/pre-departure", element: <PredepartureServices /> },
  { path: "/assessment", element: <StudentAssessmentPage /> },
]

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={<MainLayout>{element}</MainLayout>} />
      ))}
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
