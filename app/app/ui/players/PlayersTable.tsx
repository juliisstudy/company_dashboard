import Image from "next/image";
import Search from "@/app/ui/search";
import { FormattedPlayersTable } from "@/app/lib/definition";
import { fetchFilteredPlayers } from "@/app/lib/data";

export default async function PlayersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const players = await fetchFilteredPlayers(query, currentPage);
  return (
    <div className="mt-2 flow-root text-slate-300">
      <Search placeholder="Search players..." />
      <div className="mt-6 flow-root dark:bg-slate-900 text-slate-300">
        <div className="overflow-x-auto dark:bg-slate-900">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0 dark:bg-slate-900 dark:text-gray-50">
              <div className="md:hidden">
                {players?.map((player, index) => (
                  <div
                    key={index}
                    className="mb-2 w-full bg-white p-4 text-slate-700 dark:bg-slate-900 border-b border-slate-500 md:border-none rounded-md dark:text-muted-foreground"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={player.image_url}
                              className="rounded-sm"
                              alt={`${player.name}'s profile picture`}
                              width={30}
                              height={30}
                              unoptimized
                            />
                            <div>
                              <p className="">{player.name}</p>
                              <p className="text-sm">{player.email}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Active Subscriptions</p>
                        <p className="font-medium">{player.total_active}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p key={player.id} className="font-medium">
                          {player.total_paid}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{player.total_subscribe} Subscriptions</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-slate-700 md:table ">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal dark: border-b dark:border-gray-500 dark:bg-slate-900 dark:text-muted-foreground">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Subscriptions
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Active
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Canceled
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900 p-4">
                  {players.map((player, index) => (
                    <tr
                      key={index}
                      className="dark:bg-slate-900 p-4 w-full border-b text-sm  [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-xs dark:text-slate-50"
                    >
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm dark:bg-slate-900 dark:text-slate-50 dark:border-b border-slate-800">
                        <div className="flex items-center gap-3">
                          <Image
                            src={player.image_url}
                            className="rounded-sm flex items-center gap-3 "
                            alt={`${player.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{player.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap  bg-white px-4 py-5 text-sm  dark:bg-slate-900 dark:border-b border-slate-800">
                        {player.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm  dark:bg-slate-900 dark:border-b border-slate-800">
                        {player.total_subscribe}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm  dark:bg-slate-900 dark:border-b border-slate-800">
                        {player.total_active}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm  dark:bg-slate-900 dark:border-b border-slate-800">
                        {player.total_cancelled}
                      </td>
                      <td className="whitespace-nowrap  bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md  dark:bg-slate-900 dark:border-b border-slate-800">
                        {player.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
