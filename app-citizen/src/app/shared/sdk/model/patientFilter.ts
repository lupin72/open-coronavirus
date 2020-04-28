/**
 * coronavirus-server
 * coronavirus-server
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PatientIncludeFilterItems } from './patientIncludeFilterItems';
import { PatientFields } from './patientFields';


export interface PatientFilter { 
    offset?: number;
    limit?: number;
    skip?: number;
    order?: Array<string>;
    where?: { [key: string]: object; };
    fields?: PatientFields;
    include?: Array<PatientIncludeFilterItems>;
}
