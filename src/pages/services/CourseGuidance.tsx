import ServicePageTemplate from "components/templates/ServicePageTemplate"
import { courseGuidanceData } from "features/services/data/serviceData"

export default function CourseGuidance() {
    return <ServicePageTemplate {...courseGuidanceData} />
}
