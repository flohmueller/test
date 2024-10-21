import { createContext, FC, PropsWithChildren, useState } from "react";

type UserContextType = {
  user: string;
  updateUser: (user: string) => void;
};

export const UserContext = createContext<UserContextType>({
  user: "",
  updateUser: () => {
    throw new Error("a UserContext provider is required.");
  },
});

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState("");

  const updateUser = (user: string) => setUser(user);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
