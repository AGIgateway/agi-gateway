import ServicePageTemplate from "components/templates/ServicePageTemplate"
import { postdepartureServicesData } from "features/services/data/serviceData"

export default function PredepartureServices() {
    return <ServicePageTemplate {...postdepartureServicesData} />
}
