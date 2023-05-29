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
        Aquest correu electrònic conté informació privada i estrictament confidencial. Si no és destinatari del present missatge no està autoritzat a llegir-lo, retenir-lo o difondre'l.
        Complim amb el que disposa la normativa vigent en matèria de protecció de dades de caràcter personal. En aplicació de la mateixa, tenim l'obligació d'informar-lo que emmagatzemem i podem tractar les seves dades de caràcter personal per complir amb la finalitat per la qual estem en contacte.
        Quan ens envia un correu, les seves dades s'emmagatzemen a la nostra base de dades per poder atendre les seves peticions.
        L'informem que els drets d'accés, rectificació, supressió, limitació u oposició del tractament, així com el dret a la portabilitat, podràn ser exercits dirigint-se al correu electrònic iluro@ilurohc.com. Si no atenguéssim la seva petició, pot exercir els seus drets davant l'Agència Espanyola de Protecció de Dades.
        En cumpliment del que es troba previst a la Llei 34/2002, de Serveis de la Informació i comerç electrònic (LSSICE), si no vol rebre més informació comercial sobe els nostres productes i/o serveis, podrà donar-se de baixa enviant un correu electrònic a iluro@ilurohc.com, indicant " baixa" a l'assumpte.
      </small>
    </div>
    </Fragment>
  );
};

export default Signature;
