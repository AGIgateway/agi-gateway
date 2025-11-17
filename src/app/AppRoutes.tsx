// src/routes/index.ts
import { lazy } from "react"
import type { RouteConfig } from "@/types/routes"

const HomePage = lazy(() => import("@/pages/landing"))
const PrivacyPolicyPage = lazy(() => import("@/pages/policy/PrivacyPolicyPage"))
const TermsOfUsePage = lazy(() => import("@/pages/policy/TermsOfUsePage"))
const AdmissionSupport = lazy(() => import("@/pages/services/AdmissionSupport"))
const VisaSupport = lazy(() => import("@/pages/services/VisaSupport"))
const TestPreparation = lazy(() => import("@/pages/services/TestPreparation"))
const CourseGuidance = lazy(() => import("@/pages/services/CourseGuidance"))
const FuturePathways = lazy(() => import("@/pages/services/FuturePathways"))
const PostdepartureServices = lazy(() => import("@/pages/services/PostdepartureServices"))
const StudentAssessmentPage = lazy(() => import("@/pages/assesment/StudentAssessmentPage"))
const ContactPage = lazy(() => import("@/pages/contact/ContactPage"))
const StudyInNewZealandPage = lazy(() => import("@/pages/study-abroad/StudyInNewZealandPage"))
const AboutUsPage = lazy(() => import("@/pages/about/AboutUsPage"))
const WhyPartnerPage = lazy(() => import("@/pages/about/WhyPartnerPage"))

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <HomePage />,
    meta: {
      title: "Home - AGI Gateway",
      description: "Your trusted education consultancy for global study pathways.",
    },
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />,
    meta: {
      title: "Privacy Policy - AGI Gateway",
      description: "Learn how we protect your personal information.",
    },
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUsePage />,
    meta: {
      title: "Terms of Use - AGI Gateway",
      description: "Terms and conditions for using our services.",
    },
  },
  {
    path: "/services/admission-support",
    element: <AdmissionSupport />,
    meta: {
      title: "Admission Support - AGI Gateway",
      description: "End-to-end university admission assistance.",
    },
  },
  {
    path: "/services/visa-support",
    element: <VisaSupport />,
    meta: {
      title: "Visa Support - AGI Gateway",
      description: "Expert guidance for student visa applications.",
    },
  },
  {
    path: "/services/test-preparations",
    element: <TestPreparation />,
    meta: {
      title: "Test Preparation - AGI Gateway",
      description: "Ace IELTS, TOEFL, PTE, and more with our coaching.",
    },
  },
  {
    path: "/services/course-guidance",
    element: <CourseGuidance />,
    meta: {
      title: "Course Guidance - AGI Gateway",
      description: "Find the perfect course aligned with your career goals.",
    },
  },
  {
    path: "/services/future-pathways",
    element: <FuturePathways />,
    meta: {
      title: "Future Pathways - AGI Gateway",
      description: "Plan your academic and professional journey abroad.",
    },
  },
  {
    path: "/services/post-departure",
    element: <PostdepartureServices />,
    meta: {
      title: "Post-Departure Services - AGI Gateway",
      description: "Get ready for life abroad with our pre-departure support.",
    },
  },
  {
    path: "/assessment",
    element: <StudentAssessmentPage />,
    meta: {
      title: "Student Assessment - AGI Gateway",
      description: "Evaluate your profile for international education opportunities.",
    },
  },
  {
    path: "/contacts",
    element: <ContactPage />,
    meta: {
      title: "Contact Us - AGI Gateway",
      description: "Get in touch with our expert counselors for personalized guidance.",
    },
  },
  {
    path: "/study-abroad/newzealand",
    element: <StudyInNewZealandPage />,
    meta: {
      title: "Study in New Zealand - AGI Gateway",
      description:
        "Unlock world-class education in New Zealand with globally recognised qualifications and strong work rights.",
    },
  },
  {
    path: "/about",
    element: <AboutUsPage />,
    meta: {
      title: "About Us - AGI Gateway",
      description: "Learn about AGI Gateway's story, mission, and vision for empowering students worldwide.",
    },
  },
  {
    path: "/why-partner",
    element: <WhyPartnerPage />,
    meta: {
      title: "Why Partner with Us - AGI Gateway",
      description: "Discover why AGI Gateway is the trusted choice for students seeking international education guidance.",
    },
  },
]
// AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import MainLayout from "@/components/layout/MainLayout"

const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<MainLayout>{element}</MainLayout>} />
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default AppRoutes
