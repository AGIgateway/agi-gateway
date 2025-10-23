import ServicePageTemplate from "@/components/templates/ServicePageTemplate"
import { admissionSupportData } from "../../features/services/data/serviceData"

export default function AdmissionSupport() {
    return <ServicePageTemplate {...admissionSupportData} />
}
