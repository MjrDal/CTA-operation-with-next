"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GeneralCardProps {
  children: React.ReactNode;
  headerTitle: string;
}

export const GeneralCard = ({ children, headerTitle }: GeneralCardProps) => {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>{headerTitle}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  );
};
