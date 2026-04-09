// "use client";
// import * as React from "react";
// import { createMeet } from "@/app/actions/CreateMeet";
// // import { zodResolver } from "@hookform/resolvers/zod";

// import { useActionState } from "react";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Field,
//   FieldDescription,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroupTextarea,
// } from "@/components/ui/input-group";
// import { DEFAULT_PRESET_CONFIG } from "shadcn/preset";

// const userFormSchema = z.object({
//   name: z
//     .string()
//     .min(2, "Must be at least 2 characters.")
//     .max(32, "Must be at most 32 characters."),
//   date_of_birth: z.date().optional(),
// });

// // async function submitForm(prevState, formData) {
// //   await new Promise((resolve) => setTimeout(resolve, 1500));
// //   const userName = formData.get("form-user-name");
// //   return {
// //     success: true,
// //     message: `Form submitted successfully! ${userName} ${birthDate} `,
// //   };
// // }

// export function NewMeetForm() {
//   const [state, formAction, isPending] = useActionState(createMeet, {
//     success: false,
//     message: "",
//   });

//   return (
//     <Card className="w-full sm:max-w-md">
//       <CardHeader>
//         <CardTitle>New Meet</CardTitle>
//         <CardDescription>Enter meet infromation</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form action={formAction} id="new-meet-form">
//           <FieldGroup>
//             <FieldLabel htmlFor="form-meet-name">Meet Name</FieldLabel>
//             <Input
//               id="form-meet-name"
//               name="form-meet-name"
//               type="text"
//               placeholder="Iron throwdown"
//               autoComplete="off"
//             />

//             <FieldLabel htmlFor="form-meet-date">Meet Date</FieldLabel>
//             <Input
//               id="form-meet-date"
//               name="form-meet-date"
//               type="date"
//               autoComplete="off"
//             />

//             <FieldLabel htmlFor="form-meet-location">Meet Location</FieldLabel>
//             <Input
//               id="form-meet-location"
//               name="form-meet-location"
//               type="text"
//               placeholder="Portland, OR"
//               autoComplete="off"
//             />

//             <FieldLabel htmlFor="form-meet-federation">Federation</FieldLabel>
//             <Input
//               id="form-meet-federation"
//               name="form-meet-federation"
//               type="text"
//               placeholder="USAPL"
//               autoComplete="off"
//             />
//           </FieldGroup>
//         </form>
//       </CardContent>

//       <CardFooter>
//         <Field orientation="horizontal">
//           <Button type="button" variant="outline">
//             Reset
//           </Button>
//           <Button type="submit" form="new-meet-form" disabled={isPending}>
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
