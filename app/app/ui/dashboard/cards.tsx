import { fetchCardData } from "@/app/lib/data";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default async function CardWrapper() {
  const {
    numberOfPlayers,
    numberOfSubscriptions,
    numberOfActiveSubscriptions,
    totalRevenues,
  } = await fetchCardData();
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card className="" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardDescription>Number of players</CardDescription>
          <CardTitle className="text-4xl">{numberOfPlayers}</CardTitle>
          {/* <CardDescription className="max-w-lg text-balance leading-relaxed">
            Introducing Our Dynamic Orders Dashboard for Seamless Management and
            Insightful Analysis.
          </CardDescription> */}
        </CardHeader>

        <CardFooter>{/* <Button>Create New Order</Button> */}</CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Number of Subscriptions</CardDescription>
          <CardTitle className="text-4xl">{numberOfSubscriptions}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <div className="text-xs text-muted-foreground">
            +25% from last week
          </div> */}
        </CardContent>
        <CardFooter>
          {/* <Progress value={25} aria-label="25% increase" /> */}
        </CardFooter>
      </Card>
      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>Active Subscriptions</CardDescription>
          <CardTitle className="text-4xl">
            {numberOfActiveSubscriptions}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* <div className="text-xs text-muted-foreground">
            +10% from last month
          </div> */}
        </CardContent>
        <CardFooter>
          {/* <Progress value={12} aria-label="12% increase" /> */}
        </CardFooter>
      </Card>

      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="pb-2">
          <CardDescription>Total Revenues</CardDescription>
          <CardTitle className="text-4xl">{totalRevenues}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <div className="text-xs text-muted-foreground">
            +10% from last month
          </div> */}
        </CardContent>
        <CardFooter>
          {/* <Progress value={12} aria-label="12% increase" /> */}
        </CardFooter>
      </Card>
    </div>
  );
}
