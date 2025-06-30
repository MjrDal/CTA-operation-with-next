"use client";

interface Props {
  numero: string;
  commune: string;
  code: string;
  note: string;
}

export const ModaleDescription: React.FC<Props> = ({
  numero,
  commune,
  code,
  note,
}) => {
  return (
    <div className="w-[500px] bg-slate-300 p-4 rounded-sm">
      <h2>Données de l&apos;intervention</h2>
      <div>
        <h3 className="font-bold">Numéro :</h3>
        <span>{numero}</span>
        <h3 className="font-bold">Localisation :</h3>
        <span>12 rue de nul part</span>
        <div className="flex flex-row gap-2">
          <span>{code}</span>
          <span>{commune}</span>
        </div>
        <h3 className="font-bold">Observations :</h3>
        <span>{note}</span>
      </div>
    </div>
  );
};
