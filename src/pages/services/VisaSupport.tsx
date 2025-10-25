import ServicePageTemplate from "components/templates/ServicePageTemplate"
import { visaConsultationData } from "features/services/data/serviceData"

export default function VisaSupport() {
    return <ServicePageTemplate {...visaConsultationData} />
}
