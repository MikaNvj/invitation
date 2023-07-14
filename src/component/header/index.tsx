import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import './header.scss';
import { height, width } from "../Atom/Page";
import { useRecoilState } from "recoil";
import { heightchild, image, mapingchild, widthchild } from "../Atom/Child";
import * as XLSX from 'xlsx';
import { Data, Mappagedata } from "../Atom/Data";

const Header = () => {
    const [widthpage, setwidthpage] = useRecoilState(width);
    const [heigthpage, setheightpage] = useRecoilState(height);

    const [widthchilds, setwidthchilds] = useRecoilState(widthchild);
    const [heightchilds, setheightchilds] = useRecoilState(heightchild);
    const [Design, setDesign] = useRecoilState(image)
    const [lignes, setlignes] = useState<number>();
    const [colonnes, setcolonnes] = useState<number>();

    const [mapchild, setmapchild] = useRecoilState(mapingchild);
    const [mappages, setmappages] = useRecoilState(Mappagedata)

    const [data,setdata] = useRecoilState(Data)


    const setimage = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.files;
        if (value?.length) {
            const image = value[0];
            const i = image ? URL.createObjectURL(image) : '';
            setDesign(i)
        }
    };
    function separetarray(tableau: any[], n: number) {
        
        const result: any= [];
        
        for (let i = 0; i < tableau.length; i += n) {
          result.push(tableau.slice(i, i + n));
        }
        
        return result ;
      }

    function getligne(e: KeyboardEvent<HTMLInputElement>) {
        const value = (e.target as HTMLInputElement).value;

        setlignes(parseInt(value))

    }
    function getcolonne(e: KeyboardEvent<HTMLInputElement>) {
        const value = (e.target as HTMLInputElement).value;

        setcolonnes(parseInt(value))

    }
    const tab: any =[]
    function showpage() {
        if (lignes && colonnes) {
            setheightchilds((heigthpage / lignes) - 10)
            setwidthchilds((widthpage / colonnes) - 10)
            const somme = lignes * colonnes;
            const arraychunk = separetarray(data, somme);
            setmappages(arraychunk)
            for (let i: number = 0; i < somme; i++) {

                tab.push(i)

            }
            setmapchild(tab)
        }
        

    }

    function setportrait() {
        setwidthpage(496);
        setheightpage(720);
        if (lignes && colonnes) {
        setheightchilds((720 / lignes) - 10)
        setwidthchilds((496 / colonnes) - 10)}
    }
    function setpaysage() {
        setwidthpage(720);
        setheightpage(496)
        if (lignes && colonnes) {
            setheightchilds((496 / lignes) - 10)
            setwidthchilds((720 / colonnes) - 10)}
    }

    function getDatas(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.files?.[0];
        
        if (value) {
         convertExcelFile(value);
       }
    }
    const convertExcelFile = (file: File) => {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>): void => {
          const data = new Uint8Array(e.target!.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet: { [sheetName: string]: any[] } = {};
          let sheetName: string;
      
          for (sheetName of workbook.SheetNames) {
            worksheet[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          }
      
          const sheetData: any = worksheet['Feuil1'];
          setdata(sheetData)
         

          
          
        };
      
        reader.readAsArrayBuffer(file);
      };
   


    return (
        <div className="childcontaint">
            <div className="modeparent">

                <p>Mode d'affichage</p>
                <div className="affichagemode">
                    <div className="paysage" onClick={setportrait} ></div>
                    <div className="nonpaysage" onClick={setpaysage} ></div>
                </div>

            </div>
            <div className="aboutcomponent">
                <div className="paperseter">
                    <p>Mode d'input sur le papier</p>
                    <p className="sender" onClick={showpage}>V</p>
                </div>
                <div className="inputcontent">
                    <input type="number" placeholder="ligne" name="ligne" onInput={getligne} />
                    <input type="number" placeholder="colonne" name="colonne" onInput={getcolonne} />
                </div>


            </div>
            <div className="design">
                <p>Votre Design</p>
                <label className="imglab">
                    <input type="file" onChange={setimage} />
                </label>


            </div>

            <div className="data">
                <p>Votre Données</p>
                <label className="imglab">
                    <input type="file" onChange={getDatas}/>
                </label>


            </div>

            <div className="addinfo">
                +
            </div>
        </div>
    )
}
export default Header;