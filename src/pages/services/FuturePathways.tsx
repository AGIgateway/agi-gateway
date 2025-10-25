import ServicePageTemplate from "components/templates/ServicePageTemplate"
import { futurePathwaysData } from "features/services/data/serviceData"

export default function FuturePathways() {
    return <ServicePageTemplate {...futurePathwaysData} />
}
