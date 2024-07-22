"use client";

import {
  communeAction,
  communeDeleteAction,
} from "@/app/(protected)/settings/commune/[communeId]/detail/communeAction";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export type AddCommunesButtonProps = {
  casernes: {
    id: string;
    groupement: string;
    name: string;
    long: string | null;
    lat: string | null;
  }[];
};

export const AddCommunesButton = (props: AddCommunesButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [result, setResult] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const casernes = props.casernes;

    function orthodromicDistance(
      phiA: any,
      lambdaA: any,
      phiB: any,
      lambdaB: any
    ) {
      // Convert degrees to radians
      function toRadians(degrees: any) {
        return degrees * (Math.PI / 180);
      }

      // Convert input angles from degrees to radians
      let phiA_rad = toRadians(phiA);
      let lambdaA_rad = toRadians(lambdaA);
      let phiB_rad = toRadians(phiB);
      let lambdaB_rad = toRadians(lambdaB);

      // Calculate the distance using the formula
      let distance =
        60 *
        Math.acos(
          Math.sin(phiA_rad) * Math.sin(phiB_rad) +
            Math.cos(phiA_rad) *
              Math.cos(phiB_rad) *
              Math.cos(lambdaB_rad - lambdaA_rad)
        );

      return distance;
    }

    // Example usage:
    let phiA = 48.8566; // Latitude of Paris
    let lambdaA = 2.3522; // Longitude of Paris
    let phiB = 40.7128; // Latitude of New York
    let lambdaB = -74.006; // Longitude of New York

    let distance = orthodromicDistance(phiA, lambdaA, phiB, lambdaB);
    console.log(
      "La distance orthodromique est de " + distance + " milles marins."
    );

    const response1 = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/correspondance-code-insee-code-postal/records?limit=-1&refine=nom_dept%3A%22JURA%22"
    );
    const communeTable1 = await response1.json();
    communeTable1.results.map((item: any) => {
      const table: {
        coordonate: any;
        communeInsee: any;
        communePostal: any;
        caserneName: string;
        distance: number;
        communeName: any;
      }[] = [];
      casernes.map((caserne) => {
        let distance = orthodromicDistance(
          caserne.lat,
          item.geo_point_2d.lat,
          item.geo_point_2d.lon,
          caserne.long
        );
        const newEntry = {
          caserneName: caserne.name,
          distance: distance,
          communeName: item.nom_comm,
          communeInsee: item.insee_com,
          communePostal: item.postal_code,
          coordonate: item.geo_point_2d,
        };

        const addResult = table.push(newEntry);
        return table;
      });
      const tableCommune = table.sort(function (a, b) {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });
      const data = {
        name: tableCommune[0].communeName,
        code: tableCommune[0].communePostal,
        insee: tableCommune[0].communeInsee,
        long: tableCommune[0].coordonate.lon.toString(),
        lat: tableCommune[0].coordonate.lat.toString(),
        premier: tableCommune[0].caserneName,
        deuxieme: tableCommune[1].caserneName,
        troisieme: tableCommune[2].caserneName,
        quatrieme: tableCommune[3].caserneName,
        cinqieme: tableCommune[4].caserneName,
        sixieme: tableCommune[5].caserneName,
        septieme: tableCommune[6].caserneName,
        huitieme: tableCommune[7].caserneName,
      };
      console.log(data);
      communeDeleteAction();
      startTransition(() => {
        communeAction(data).then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
      });
    });

    const response2 = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/correspondance-code-insee-code-postal/records?limit=-1&offset=100&refine=nom_dept%3A%22JURA%22"
    );
    const communeTable2 = await response2.json();
    communeTable2.results.map((item: any) => {
      const table: {
        coordonate: any;
        communeInsee: any;
        communePostal: any;
        caserneName: string;
        distance: number;
        communeName: any;
      }[] = [];
      casernes.map((caserne) => {
        let distance = orthodromicDistance(
          caserne.lat,
          item.geo_point_2d.lat,
          item.geo_point_2d.lon,
          caserne.long
        );
        const newEntry = {
          caserneName: caserne.name,
          distance: distance,
          communeName: item.nom_comm,
          communeInsee: item.insee_com,
          communePostal: item.postal_code,
          coordonate: item.geo_point_2d,
        };

        const addResult = table.push(newEntry);
        return table;
      });
      const tableCommune = table.sort(function (a, b) {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });
      const data = {
        name: tableCommune[0].communeName,
        code: tableCommune[0].communePostal,
        insee: tableCommune[0].communeInsee,
        long: tableCommune[0].coordonate.lon.toString(),
        lat: tableCommune[0].coordonate.lat.toString(),
        premier: tableCommune[0].caserneName,
        deuxieme: tableCommune[1].caserneName,
        troisieme: tableCommune[2].caserneName,
        quatrieme: tableCommune[3].caserneName,
        cinqieme: tableCommune[4].caserneName,
        sixieme: tableCommune[5].caserneName,
        septieme: tableCommune[6].caserneName,
        huitieme: tableCommune[7].caserneName,
      };
      console.log(data);
      startTransition(() => {
        communeAction(data).then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
      });
    });
    const response3 = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/correspondance-code-insee-code-postal/records?limit=-1&offset=200&refine=nom_dept%3A%22JURA%22"
    );
    const communeTable3 = await response3.json();
    communeTable3.results.map((item: any) => {
      const table: {
        coordonate: any;
        communeInsee: any;
        communePostal: any;
        caserneName: string;
        distance: number;
        communeName: any;
      }[] = [];
      casernes.map((caserne) => {
        let distance = orthodromicDistance(
          caserne.lat,
          item.geo_point_2d.lat,
          item.geo_point_2d.lon,
          caserne.long
        );
        const newEntry = {
          caserneName: caserne.name,
          distance: distance,
          communeName: item.nom_comm,
          communeInsee: item.insee_com,
          communePostal: item.postal_code,
          coordonate: item.geo_point_2d,
        };

        const addResult = table.push(newEntry);
        return table;
      });
      const tableCommune = table.sort(function (a, b) {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });
      const data = {
        name: tableCommune[0].communeName,
        code: tableCommune[0].communePostal,
        insee: tableCommune[0].communeInsee,
        long: tableCommune[0].coordonate.lon.toString(),
        lat: tableCommune[0].coordonate.lat.toString(),
        premier: tableCommune[0].caserneName,
        deuxieme: tableCommune[1].caserneName,
        troisieme: tableCommune[2].caserneName,
        quatrieme: tableCommune[3].caserneName,
        cinqieme: tableCommune[4].caserneName,
        sixieme: tableCommune[5].caserneName,
        septieme: tableCommune[6].caserneName,
        huitieme: tableCommune[7].caserneName,
      };
      console.log(data);
      startTransition(() => {
        communeAction(data).then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
      });
    });
    const response4 = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/correspondance-code-insee-code-postal/records?limit=-1&offset=300&refine=nom_dept%3A%22JURA%22"
    );
    const communeTable4 = await response4.json();
    communeTable4.results.map((item: any) => {
      const table: {
        coordonate: any;
        communeInsee: any;
        communePostal: any;
        caserneName: string;
        distance: number;
        communeName: any;
      }[] = [];
      casernes.map((caserne) => {
        let distance = orthodromicDistance(
          caserne.lat,
          item.geo_point_2d.lat,
          item.geo_point_2d.lon,
          caserne.long
        );
        const newEntry = {
          caserneName: caserne.name,
          distance: distance,
          communeName: item.nom_comm,
          communeInsee: item.insee_com,
          communePostal: item.postal_code,
          coordonate: item.geo_point_2d,
        };

        const addResult = table.push(newEntry);
        return table;
      });
      const tableCommune = table.sort(function (a, b) {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });
      const data = {
        name: tableCommune[0].communeName,
        code: tableCommune[0].communePostal,
        insee: tableCommune[0].communeInsee,
        long: tableCommune[0].coordonate.lon.toString(),
        lat: tableCommune[0].coordonate.lat.toString(),
        premier: tableCommune[0].caserneName,
        deuxieme: tableCommune[1].caserneName,
        troisieme: tableCommune[2].caserneName,
        quatrieme: tableCommune[3].caserneName,
        cinqieme: tableCommune[4].caserneName,
        sixieme: tableCommune[5].caserneName,
        septieme: tableCommune[6].caserneName,
        huitieme: tableCommune[7].caserneName,
      };
      console.log(data);
      startTransition(() => {
        communeAction(data).then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
      });
    });
    const response5 = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/correspondance-code-insee-code-postal/records?limit=-1&offset=400&refine=nom_dept%3A%22JURA%22"
    );
    const communeTable5 = await response5.json();
    communeTable5.results.map((item: any) => {
      const table: {
        coordonate: any;
        communeInsee: any;
        communePostal: any;
        caserneName: string;
        distance: number;
        communeName: any;
      }[] = [];
      casernes.map((caserne) => {
        let distance = orthodromicDistance(
          caserne.lat,
          item.geo_point_2d.lat,
          item.geo_point_2d.lon,
          caserne.long
        );
        const newEntry = {
          caserneName: caserne.name,
          distance: distance,
          communeName: item.nom_comm,
          communeInsee: item.insee_com,
          communePostal: item.postal_code,
          coordonate: item.geo_point_2d,
        };

        const addResult = table.push(newEntry);
        return table;
      });
      const tableCommune = table.sort(function (a, b) {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });
      const data = {
        name: tableCommune[0].communeName,
        code: tableCommune[0].communePostal,
        insee: tableCommune[0].communeInsee,
        long: tableCommune[0].coordonate.lon.toString(),
        lat: tableCommune[0].coordonate.lat.toString(),
        premier: tableCommune[0].caserneName,
        deuxieme: tableCommune[1].caserneName,
        troisieme: tableCommune[2].caserneName,
        quatrieme: tableCommune[3].caserneName,
        cinqieme: tableCommune[4].caserneName,
        sixieme: tableCommune[5].caserneName,
        septieme: tableCommune[6].caserneName,
        huitieme: tableCommune[7].caserneName,
      };
      console.log(data);
      startTransition(() => {
        communeAction(data).then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
      });
    });
    const response6 = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/correspondance-code-insee-code-postal/records?limit=-1&offset=500&refine=nom_dept%3A%22JURA%22"
    );
    const communeTable6 = await response6.json();
    communeTable6.results.map((item: any) => {
      const table: {
        coordonate: any;
        communeInsee: any;
        communePostal: any;
        caserneName: string;
        distance: number;
        communeName: any;
      }[] = [];
      casernes.map((caserne) => {
        let distance = orthodromicDistance(
          caserne.lat,
          item.geo_point_2d.lat,
          item.geo_point_2d.lon,
          caserne.long
        );
        const newEntry = {
          caserneName: caserne.name,
          distance: distance,
          communeName: item.nom_comm,
          communeInsee: item.insee_com,
          communePostal: item.postal_code,
          coordonate: item.geo_point_2d,
        };

        const addResult = table.push(newEntry);
        return table;
      });
      const tableCommune = table.sort(function (a, b) {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });
      const data = {
        name: tableCommune[0].communeName,
        code: tableCommune[0].communePostal,
        insee: tableCommune[0].communeInsee,
        long: tableCommune[0].coordonate.lon.toString(),
        lat: tableCommune[0].coordonate.lat.toString(),
        premier: tableCommune[0].caserneName,
        deuxieme: tableCommune[1].caserneName,
        troisieme: tableCommune[2].caserneName,
        quatrieme: tableCommune[3].caserneName,
        cinqieme: tableCommune[4].caserneName,
        sixieme: tableCommune[5].caserneName,
        septieme: tableCommune[6].caserneName,
        huitieme: tableCommune[7].caserneName,
      };
      console.log(data);
      startTransition(() => {
        communeAction(data).then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
      });
    });
  };

  useEffect(() => {
    handleSubmit;
  }, [handleSubmit]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Button variant="default">recuperer</Button>
        <FormError message={error} />
        <FormSuccess message={success} />
      </form>
    </div>
  );
};
