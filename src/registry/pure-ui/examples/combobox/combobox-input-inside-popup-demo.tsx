"use client";

import { ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from "@/registry/pure-ui/ui/combobox";

interface Country {
  code: string;
  value: string | null;
  continent: string;
  label: string;
}

const countries: Country[] = [
  { code: "", continent: "", label: "Select country", value: null },
  { code: "af", continent: "Asia", label: "Afghanistan", value: "afghanistan" },
  { code: "al", continent: "Europe", label: "Albania", value: "albania" },
  { code: "dz", continent: "Africa", label: "Algeria", value: "algeria" },
  { code: "ad", continent: "Europe", label: "Andorra", value: "andorra" },
  { code: "ao", continent: "Africa", label: "Angola", value: "angola" },
  {
    code: "ar",
    continent: "South America",
    label: "Argentina",
    value: "argentina",
  },
  { code: "am", continent: "Asia", label: "Armenia", value: "armenia" },
  { code: "au", continent: "Oceania", label: "Australia", value: "australia" },
  { code: "at", continent: "Europe", label: "Austria", value: "austria" },
  { code: "az", continent: "Asia", label: "Azerbaijan", value: "azerbaijan" },
  {
    code: "bs",
    continent: "North America",
    label: "Bahamas",
    value: "bahamas",
  },
  { code: "bh", continent: "Asia", label: "Bahrain", value: "bahrain" },
  { code: "bd", continent: "Asia", label: "Bangladesh", value: "bangladesh" },
  {
    code: "bb",
    continent: "North America",
    label: "Barbados",
    value: "barbados",
  },
  { code: "by", continent: "Europe", label: "Belarus", value: "belarus" },
  { code: "be", continent: "Europe", label: "Belgium", value: "belgium" },
  { code: "bz", continent: "North America", label: "Belize", value: "belize" },
  { code: "bj", continent: "Africa", label: "Benin", value: "benin" },
  { code: "bt", continent: "Asia", label: "Bhutan", value: "bhutan" },
  {
    code: "bo",
    continent: "South America",
    label: "Bolivia",
    value: "bolivia",
  },
  {
    code: "ba",
    continent: "Europe",
    label: "Bosnia and Herzegovina",
    value: "bosnia-and-herzegovina",
  },
  { code: "bw", continent: "Africa", label: "Botswana", value: "botswana" },
  { code: "br", continent: "South America", label: "Brazil", value: "brazil" },
  { code: "bn", continent: "Asia", label: "Brunei", value: "brunei" },
  { code: "bg", continent: "Europe", label: "Bulgaria", value: "bulgaria" },
  {
    code: "bf",
    continent: "Africa",
    label: "Burkina Faso",
    value: "burkina-faso",
  },
  { code: "bi", continent: "Africa", label: "Burundi", value: "burundi" },
  { code: "kh", continent: "Asia", label: "Cambodia", value: "cambodia" },
  { code: "cm", continent: "Africa", label: "Cameroon", value: "cameroon" },
  { code: "ca", continent: "North America", label: "Canada", value: "canada" },
  { code: "cv", continent: "Africa", label: "Cape Verde", value: "cape-verde" },
  {
    code: "cf",
    continent: "Africa",
    label: "Central African Republic",
    value: "central-african-republic",
  },
  { code: "td", continent: "Africa", label: "Chad", value: "chad" },
  { code: "cl", continent: "South America", label: "Chile", value: "chile" },
  { code: "cn", continent: "Asia", label: "China", value: "china" },
  {
    code: "co",
    continent: "South America",
    label: "Colombia",
    value: "colombia",
  },
  { code: "km", continent: "Africa", label: "Comoros", value: "comoros" },
  { code: "cg", continent: "Africa", label: "Congo", value: "congo" },
  {
    code: "cr",
    continent: "North America",
    label: "Costa Rica",
    value: "costa-rica",
  },
  { code: "hr", continent: "Europe", label: "Croatia", value: "croatia" },
  { code: "cu", continent: "North America", label: "Cuba", value: "cuba" },
  { code: "cy", continent: "Asia", label: "Cyprus", value: "cyprus" },
  {
    code: "cz",
    continent: "Europe",
    label: "Czech Republic",
    value: "czech-republic",
  },
  { code: "dk", continent: "Europe", label: "Denmark", value: "denmark" },
  { code: "dj", continent: "Africa", label: "Djibouti", value: "djibouti" },
  {
    code: "dm",
    continent: "North America",
    label: "Dominica",
    value: "dominica",
  },
  {
    code: "do",
    continent: "North America",
    label: "Dominican Republic",
    value: "dominican-republic",
  },
  {
    code: "ec",
    continent: "South America",
    label: "Ecuador",
    value: "ecuador",
  },
  { code: "eg", continent: "Africa", label: "Egypt", value: "egypt" },
  {
    code: "sv",
    continent: "North America",
    label: "El Salvador",
    value: "el-salvador",
  },
  {
    code: "gq",
    continent: "Africa",
    label: "Equatorial Guinea",
    value: "equatorial-guinea",
  },
  { code: "er", continent: "Africa", label: "Eritrea", value: "eritrea" },
  { code: "ee", continent: "Europe", label: "Estonia", value: "estonia" },
  { code: "et", continent: "Africa", label: "Ethiopia", value: "ethiopia" },
  { code: "fj", continent: "Oceania", label: "Fiji", value: "fiji" },
  { code: "fi", continent: "Europe", label: "Finland", value: "finland" },
  { code: "fr", continent: "Europe", label: "France", value: "france" },
  { code: "ga", continent: "Africa", label: "Gabon", value: "gabon" },
  { code: "gm", continent: "Africa", label: "Gambia", value: "gambia" },
  { code: "ge", continent: "Asia", label: "Georgia", value: "georgia" },
  { code: "de", continent: "Europe", label: "Germany", value: "germany" },
  { code: "gh", continent: "Africa", label: "Ghana", value: "ghana" },
  { code: "gr", continent: "Europe", label: "Greece", value: "greece" },
  {
    code: "gd",
    continent: "North America",
    label: "Grenada",
    value: "grenada",
  },
  {
    code: "gt",
    continent: "North America",
    label: "Guatemala",
    value: "guatemala",
  },
  { code: "gn", continent: "Africa", label: "Guinea", value: "guinea" },
  {
    code: "gw",
    continent: "Africa",
    label: "Guinea-Bissau",
    value: "guinea-bissau",
  },
  { code: "gy", continent: "South America", label: "Guyana", value: "guyana" },
  { code: "ht", continent: "North America", label: "Haiti", value: "haiti" },
  {
    code: "hn",
    continent: "North America",
    label: "Honduras",
    value: "honduras",
  },
  { code: "hu", continent: "Europe", label: "Hungary", value: "hungary" },
  { code: "is", continent: "Europe", label: "Iceland", value: "iceland" },
  { code: "in", continent: "Asia", label: "India", value: "india" },
  { code: "id", continent: "Asia", label: "Indonesia", value: "indonesia" },
  { code: "ir", continent: "Asia", label: "Iran", value: "iran" },
  { code: "iq", continent: "Asia", label: "Iraq", value: "iraq" },
  { code: "ie", continent: "Europe", label: "Ireland", value: "ireland" },
  { code: "il", continent: "Asia", label: "Israel", value: "israel" },
  { code: "it", continent: "Europe", label: "Italy", value: "italy" },
  {
    code: "jm",
    continent: "North America",
    label: "Jamaica",
    value: "jamaica",
  },
  { code: "jp", continent: "Asia", label: "Japan", value: "japan" },
  { code: "jo", continent: "Asia", label: "Jordan", value: "jordan" },
  { code: "kz", continent: "Asia", label: "Kazakhstan", value: "kazakhstan" },
  { code: "ke", continent: "Africa", label: "Kenya", value: "kenya" },
  { code: "kw", continent: "Asia", label: "Kuwait", value: "kuwait" },
  { code: "kg", continent: "Asia", label: "Kyrgyzstan", value: "kyrgyzstan" },
  { code: "la", continent: "Asia", label: "Laos", value: "laos" },
  { code: "lv", continent: "Europe", label: "Latvia", value: "latvia" },
  { code: "lb", continent: "Asia", label: "Lebanon", value: "lebanon" },
  { code: "ls", continent: "Africa", label: "Lesotho", value: "lesotho" },
  { code: "lr", continent: "Africa", label: "Liberia", value: "liberia" },
  { code: "ly", continent: "Africa", label: "Libya", value: "libya" },
  {
    code: "li",
    continent: "Europe",
    label: "Liechtenstein",
    value: "liechtenstein",
  },
  { code: "lt", continent: "Europe", label: "Lithuania", value: "lithuania" },
  { code: "lu", continent: "Europe", label: "Luxembourg", value: "luxembourg" },
  { code: "mg", continent: "Africa", label: "Madagascar", value: "madagascar" },
  { code: "mw", continent: "Africa", label: "Malawi", value: "malawi" },
  { code: "my", continent: "Asia", label: "Malaysia", value: "malaysia" },
  { code: "mv", continent: "Asia", label: "Maldives", value: "maldives" },
  { code: "ml", continent: "Africa", label: "Mali", value: "mali" },
  { code: "mt", continent: "Europe", label: "Malta", value: "malta" },
  {
    code: "mh",
    continent: "Oceania",
    label: "Marshall Islands",
    value: "marshall-islands",
  },
  { code: "mr", continent: "Africa", label: "Mauritania", value: "mauritania" },
  { code: "mu", continent: "Africa", label: "Mauritius", value: "mauritius" },
  { code: "mx", continent: "North America", label: "Mexico", value: "mexico" },
  {
    code: "fm",
    continent: "Oceania",
    label: "Micronesia",
    value: "micronesia",
  },
  { code: "md", continent: "Europe", label: "Moldova", value: "moldova" },
  { code: "mc", continent: "Europe", label: "Monaco", value: "monaco" },
  { code: "mn", continent: "Asia", label: "Mongolia", value: "mongolia" },
  { code: "me", continent: "Europe", label: "Montenegro", value: "montenegro" },
  { code: "ma", continent: "Africa", label: "Morocco", value: "morocco" },
  { code: "mz", continent: "Africa", label: "Mozambique", value: "mozambique" },
  { code: "mm", continent: "Asia", label: "Myanmar", value: "myanmar" },
  { code: "na", continent: "Africa", label: "Namibia", value: "namibia" },
  { code: "nr", continent: "Oceania", label: "Nauru", value: "nauru" },
  { code: "np", continent: "Asia", label: "Nepal", value: "nepal" },
  {
    code: "nl",
    continent: "Europe",
    label: "Netherlands",
    value: "netherlands",
  },
  {
    code: "nz",
    continent: "Oceania",
    label: "New Zealand",
    value: "new-zealand",
  },
  {
    code: "ni",
    continent: "North America",
    label: "Nicaragua",
    value: "nicaragua",
  },
  { code: "ne", continent: "Africa", label: "Niger", value: "niger" },
  { code: "ng", continent: "Africa", label: "Nigeria", value: "nigeria" },
  { code: "kp", continent: "Asia", label: "North Korea", value: "north-korea" },
  {
    code: "mk",
    continent: "Europe",
    label: "North Macedonia",
    value: "north-macedonia",
  },
  { code: "no", continent: "Europe", label: "Norway", value: "norway" },
  { code: "om", continent: "Asia", label: "Oman", value: "oman" },
  { code: "pk", continent: "Asia", label: "Pakistan", value: "pakistan" },
  { code: "pw", continent: "Oceania", label: "Palau", value: "palau" },
  { code: "ps", continent: "Asia", label: "Palestine", value: "palestine" },
  { code: "pa", continent: "North America", label: "Panama", value: "panama" },
  {
    code: "pg",
    continent: "Oceania",
    label: "Papua New Guinea",
    value: "papua-new-guinea",
  },
  {
    code: "py",
    continent: "South America",
    label: "Paraguay",
    value: "paraguay",
  },
  { code: "pe", continent: "South America", label: "Peru", value: "peru" },
  { code: "ph", continent: "Asia", label: "Philippines", value: "philippines" },
  { code: "pl", continent: "Europe", label: "Poland", value: "poland" },
  { code: "pt", continent: "Europe", label: "Portugal", value: "portugal" },
  { code: "qa", continent: "Asia", label: "Qatar", value: "qatar" },
  { code: "ro", continent: "Europe", label: "Romania", value: "romania" },
  { code: "ru", continent: "Europe", label: "Russia", value: "russia" },
  { code: "rw", continent: "Africa", label: "Rwanda", value: "rwanda" },
  { code: "ws", continent: "Oceania", label: "Samoa", value: "samoa" },
  { code: "sm", continent: "Europe", label: "San Marino", value: "san-marino" },
  {
    code: "sa",
    continent: "Asia",
    label: "Saudi Arabia",
    value: "saudi-arabia",
  },
  { code: "sn", continent: "Africa", label: "Senegal", value: "senegal" },
  { code: "rs", continent: "Europe", label: "Serbia", value: "serbia" },
  { code: "sc", continent: "Africa", label: "Seychelles", value: "seychelles" },
  {
    code: "sl",
    continent: "Africa",
    label: "Sierra Leone",
    value: "sierra-leone",
  },
  { code: "sg", continent: "Asia", label: "Singapore", value: "singapore" },
  { code: "sk", continent: "Europe", label: "Slovakia", value: "slovakia" },
  { code: "si", continent: "Europe", label: "Slovenia", value: "slovenia" },
  {
    code: "sb",
    continent: "Oceania",
    label: "Solomon Islands",
    value: "solomon-islands",
  },
  { code: "so", continent: "Africa", label: "Somalia", value: "somalia" },
  {
    code: "za",
    continent: "Africa",
    label: "South Africa",
    value: "south-africa",
  },
  { code: "kr", continent: "Asia", label: "South Korea", value: "south-korea" },
  {
    code: "ss",
    continent: "Africa",
    label: "South Sudan",
    value: "south-sudan",
  },
  { code: "es", continent: "Europe", label: "Spain", value: "spain" },
  { code: "lk", continent: "Asia", label: "Sri Lanka", value: "sri-lanka" },
  { code: "sd", continent: "Africa", label: "Sudan", value: "sudan" },
  {
    code: "sr",
    continent: "South America",
    label: "Suriname",
    value: "suriname",
  },
  { code: "se", continent: "Europe", label: "Sweden", value: "sweden" },
  {
    code: "ch",
    continent: "Europe",
    label: "Switzerland",
    value: "switzerland",
  },
  { code: "sy", continent: "Asia", label: "Syria", value: "syria" },
  { code: "tw", continent: "Asia", label: "Taiwan", value: "taiwan" },
  { code: "tj", continent: "Asia", label: "Tajikistan", value: "tajikistan" },
  { code: "tz", continent: "Africa", label: "Tanzania", value: "tanzania" },
  { code: "th", continent: "Asia", label: "Thailand", value: "thailand" },
  { code: "tl", continent: "Asia", label: "Timor-Leste", value: "timor-leste" },
  { code: "tg", continent: "Africa", label: "Togo", value: "togo" },
  { code: "to", continent: "Oceania", label: "Tonga", value: "tonga" },
  {
    code: "tt",
    continent: "North America",
    label: "Trinidad and Tobago",
    value: "trinidad-and-tobago",
  },
  { code: "tn", continent: "Africa", label: "Tunisia", value: "tunisia" },
  { code: "tr", continent: "Asia", label: "Turkey", value: "turkey" },
  {
    code: "tm",
    continent: "Asia",
    label: "Turkmenistan",
    value: "turkmenistan",
  },
  { code: "tv", continent: "Oceania", label: "Tuvalu", value: "tuvalu" },
  { code: "ug", continent: "Africa", label: "Uganda", value: "uganda" },
  { code: "ua", continent: "Europe", label: "Ukraine", value: "ukraine" },
  {
    code: "ae",
    continent: "Asia",
    label: "United Arab Emirates",
    value: "united-arab-emirates",
  },
  {
    code: "gb",
    continent: "Europe",
    label: "United Kingdom",
    value: "united-kingdom",
  },
  {
    code: "us",
    continent: "North America",
    label: "United States",
    value: "united-states",
  },
  {
    code: "uy",
    continent: "South America",
    label: "Uruguay",
    value: "uruguay",
  },
  { code: "uz", continent: "Asia", label: "Uzbekistan", value: "uzbekistan" },
  { code: "vu", continent: "Oceania", label: "Vanuatu", value: "vanuatu" },
  {
    code: "va",
    continent: "Europe",
    label: "Vatican City",
    value: "vatican-city",
  },
  {
    code: "ve",
    continent: "South America",
    label: "Venezuela",
    value: "venezuela",
  },
  { code: "vn", continent: "Asia", label: "Vietnam", value: "vietnam" },
  { code: "ye", continent: "Asia", label: "Yemen", value: "yemen" },
  { code: "zm", continent: "Africa", label: "Zambia", value: "zambia" },
  { code: "zw", continent: "Africa", label: "Zimbabwe", value: "zimbabwe" },
];

export function ComboboxInputInsidePopupDemo() {
  return (
    <Combobox defaultValue={countries[0]} items={countries}>
      <ComboboxTrigger
        className="max-w-sm w-full"
        render={
          <Button
            className="w-full justify-between font-normal"
            variant="outline"
          />
        }
      >
        <ComboboxValue />
        <ChevronsUpDownIcon />
      </ComboboxTrigger>

      <ComboboxPopup aria-label="Select country" className="">
        <div className="border-b p-2">
          <ComboboxInput
            className="rounded-md"
            placeholder="e.g. United Kingdom"
          />
        </div>
        <ComboboxEmpty>No countries found.</ComboboxEmpty>
        <ComboboxList>
          {(country: Country) => (
            <ComboboxItem key={country.code} value={country}>
              {country.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}
