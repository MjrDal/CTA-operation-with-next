"use client";

interface Props {
  numero: string;
  commune: string;
  code: string;
  vehicules: {
    id: string;
    name: string;
  }[];
  note: string;
}

export const ModaleVehicules: React.FC<Props> = ({
  numero,
  commune,
  code,
  vehicules,
  note,
}) => {
  return (
    <div className="w-[600px]">
      <h2>Vehicules sur l&apos;intervention</h2>
      <div>
        {vehicules.map((doc) => (
          <div key={doc.id} className="flex flex-row p-2">
            <h3>{doc.name.split(" ")[1]}:</h3>
            <p className=" bg-red-600 w-24 mx-2 flex justify-center rounded-sm text-white">
              {doc.name.split(" ")[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
