import ServicePageTemplate from "@/components/templates/ServicePageTemplate"
import { languageTrainingData } from "../../features/services/data/serviceData"

export default function CourseGuidance() {
    return <ServicePageTemplate {...languageTrainingData} />
}
