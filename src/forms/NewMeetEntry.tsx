// "use client";
// import * as React from "react";
// import { meetEntry } from "@/app/actions/MeetEntry";

// import { useActionState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export function NewMeetEntry() {
//   const [coefficient, setCoefficient] = React.useState("");
//   const [state, formAction, isPending] = useActionState(meetEntry, {
//     success: false,
//     message: "",
//   });

//   return (
//     <Card className="w-full sm:max-w-md">
//       <CardHeader>
//         <CardTitle>Meet Entry</CardTitle>
//         <CardDescription>
//           Enter your information for today&apos;s meet
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form
//           action={formAction}
//           id="new-meetEntry-form"
//           onReset={() => setCoefficient("")}
//         >
//           <FieldGroup>
//             <FieldLabel htmlFor="form-meetEntry-lifterId">Lifter ID</FieldLabel>
//             <Input
//               id="form-meetEntry-lifterId"
//               name="form-meetEntry-lifterId"
//               type="number"
//               min={1}
//               placeholder="1"
//               required
//               autoComplete="off"
//             />

//             <FieldLabel htmlFor="form-meetEntry-meetId">Meet ID</FieldLabel>
//             <Input
//               id="form-meetEntry-meetId"
//               name="form-meetEntry-meetId"
//               type="number"
//               min={1}
//               placeholder="1"
//               required
//               autoComplete="off"
//             />

//             <FieldLabel htmlFor="form-meetEntry-bodyweight">
//               Bodyweight (kg)
//             </FieldLabel>
//             <Input
//               id="form-meetEntry-bodyweight"
//               name="form-meetEntry-bodyweight"
//               type="number"
//               placeholder="85"
//               autoComplete="off"
//             />

//             <FieldLabel htmlFor="form-meetEntry-weightClass">
//               Weight class
//             </FieldLabel>
//             <Input
//               id="form-meetEntry-weightClass"
//               name="form-meetEntry-weightClass"
//               type="text"
//               autoComplete="on"
//             />

//             <input
//               type="hidden"
//               name="form-meetEntry-coefficient"
//               value={coefficient}
//             />
//             <FieldLabel htmlFor="form-meetEntry-coefficient-trigger">
//               Coefficient (optional, for Dots / Wilks)
//             </FieldLabel>
//             <Select
//               value={coefficient || undefined}
//               onValueChange={setCoefficient}
//             >
//               <SelectTrigger
//                 id="form-meetEntry-coefficient-trigger"
//                 className="w-full max-w-48"
//               >
//                 <SelectValue placeholder="Select sex" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="female">Female</SelectItem>
//                 <SelectItem value="male">Male</SelectItem>
//               </SelectContent>
//             </Select>
//           </FieldGroup>
//         </form>
//       </CardContent>

//       <CardFooter>
//         <Field orientation="horizontal">
//           <Button type="reset" form="new-meetEntry-form" variant="outline">
//             Reset
//           </Button>
//           <Button type="submit" form="new-meetEntry-form" disabled={isPending}>
//             {isPending ? "Submitting..." : "Submit"}
//           </Button>
//           {state.message && (
//             <p
//               className={`form-message ${state.success ? "success" : "error"}`}
//             >
//               {state.message}
//             </p>
//           )}
//         </Field>
//       </CardFooter>
//     </Card>
//   );
// }
