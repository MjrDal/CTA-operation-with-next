import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const SettingGeneral = async () => {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>General settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href="/settings/groupement">
            <Button>Goupements</Button>
          </Link>
          <Link href="/settings/theme">
            <Button>Thèmes</Button>
          </Link>
          <Link href="/settings/type">
            <Button>Types de vehicules</Button>
          </Link>
          <Link href="/settings/commune">
            <Button>Commune</Button>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>caserne settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href="/settings/caserne">
            <Button>Modifier</Button>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>vehicules settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href="/settings/vehicule">
            <Button>Modifier</Button>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>interventions settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Interventions</Button>
          <Button>Motifs</Button>
        </CardContent>
      </Card>
    </section>
  );
};
