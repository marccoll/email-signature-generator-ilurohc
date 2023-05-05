import { Fragment } from "react";
import { PhotoSignatureProps } from "./App";

const Signature = (props: PhotoSignatureProps) => {
  return (
    /*Container table */
    <Fragment>
    <div
    className="signature">
    <table
      cellPadding={5}
      cellSpacing={0}
      style={{
        height: "100px",
        maxWidth: "100%",
        whiteSpace: "nowrap",
        background: "#FFFFFF",
        fontFamily: "Arial, Helvetica, sans-serif",
        paddingBottom: "10px",
      }}
    >
      <tbody>
        <tr>
          <td rowSpan={0}>
            {/* table containing the logo image */}
            <table cellPadding={0} cellSpacing={0}>
              <tbody>
                <tr>
                  <td>
                    <a href="https://ilurohc.com" target="_blank" rel="noreferrer">
                      <img
                        style={{ width: "80px", verticalAlign: "middle"  }}
                        src={props.logo}
                        alt={"iluro-logo"}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td valign="top" 
            style={{
              border:"none",
              borderLeft:"solid #BDBDBD 1.0pt",
              //msoBorderLeftAlt: "solid #BDBDBD .75pt",
              padding: "0cm 0cm 0cm 10.5pt"
            }}
          ></td>
          <td rowSpan={5}>
            {/* table containing the text content */}
            <table cellPadding={0} cellSpacing={0} style={{ height: "100%" }}>
              <tbody>
                <tr>
                  <td
                    style={{
                      color: "rgba(0, 0, 0, 0.87)",
                      fontFamily: "helvetica, bold",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {props.fullName}
                    {props.credentials === "" ? "" : ", "}
                    {props.credentials === "" ? "" : props.credentials}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "#646464",
                      fontFamily: "helvetica",
                      fontSize: "14px",
                    }}
                  >
                    {props.title}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "#646464",
                      fontFamily: "helvetica",
                      fontSize: "14px",
                    }}
                  >
                    {props.phone === "" ? "" : "Telf.: "}
                    {props.phone === "" ? "" : props.phone}
                    {props.mobile === "" ? "" : " Mbl.: "}
                    {props.mobile === "" ? "" : props.mobile}
                    
                  </td>
                </tr>
                
                <tr>
                  {/* the class 'align-bottom' also controls the height of the row that this cell inhabits */}
                  <td style={{ height: "30%", verticalAlign: "bottom" }}>
                    {/* if props.calendlyLink is blank there will be nothing in this cell */}
                    <a
                      href="https://ilurohc.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      www.ilurohc.com
                    </a>
                    <span style={{padding: "0 6px"}}> -</span>
                    <a
                      href="https://www.instagram.com/ilurohc/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      @ilurohc
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        
      </tbody>
    </table>

      <small style={{fontSize:"10px", color:"#A2A8AB", fontStyle: "italic"}}>
      Este mensaje y sus archivos adjuntos van dirigidos exclusivamente a su destinatario, pudiendo contener información confidencial. No está permitida su comunicación, reproducción o distribución sin la autorización expresa de ILURO HOCKEY CLUB. Si usted no es el destinatario final, o si ha recibido este correo por error, deberá comunicárnoslo de forma inmediata y eliminar el mensaje y todos sus documentos adjuntos.
      De conformidad con lo dispuesto en la normativa aplicable en materia de protección de datos (RGPD y LOPDGDD), le informamos que los datos personales recabados por el propio interesado serán tratados por  el responsable del tratamiento, ILURO HOCKEY CLUB, con la finalidad de gestionar la relación que nos vincula así como para el envío de comunicaciones sobre nuestros servicios o productos y se conservarán mientras ninguna de las partes se oponga a ello o durante el periodo necesario para cumplir con las obligaciones legales. No se comunicarán datos a terceros salvo obligación legal o consentimiento expreso del interesado. Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad respecto de sus datos personales enviando un mensaje a RGPD@ILUROHC.COM. Tiene derecho a presentar una reclamación ante la AEPD en caso de disconformidad con el tratamiento de sus datos. En cumplimiento de lo previsto en el articulo 21 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), si usted no desea recibir información comercial sobre nuestros productos y/o servicios, puede darse de baja enviando un correo electrónico a iluro@ilurohc.com, indicando en el Asunto "baja" o "no enviar".
      </small>
    </div>
    </Fragment>
  );
};

export default Signature;
