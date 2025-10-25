import ServicePageTemplate from "components/templates/ServicePageTemplate"
import { testPreparationData } from "features/services/data/serviceData"

export default function TestPreparation() {
    return <ServicePageTemplate {...testPreparationData} />
}
