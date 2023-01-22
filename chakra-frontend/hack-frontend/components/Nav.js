import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import styles from '../styles/Nav.module.scss'
import { HamburgerIcon, CloseIcon, SettingsIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const pages = [
  { name: "CALENDAR", route: "/calendar" },
  { name: "SUMMARIES", route: "/summaries" },
  { name: "MEMORIES", route: "/memories" },
];

const NavLink = ({ name, route, active }) => {
  // const bg = active ? `url(/images/bookmark.svg)` : "";
  const sizeIncrease = active ? 150 : 0;
  return <Link
    className={active? styles.topactive : ""}
    px={2}
    py={1}
    rounded={"md"}
    fontWeight={active? "bold" : ""}
    // border="1px solid black"
    // position="fixed"
    // bg hack
    // pb={`${sizeIncrease}`}
    // mb={`-${sizeIncrease}`}
    // bg={bg}
    // bgSize="150px"
    // bgRepeat="no-repeat"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={route}
  >
    <Box
    // h="100px"
    fontSize="20pt"
    >
      {name}
    </Box>
  </Link>
};

const Nav = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const makeLinks = () =>
    pages.map((page, i) => {
      return <NavLink
        key={i} 
        name={page.name} 
        route={page.route}
        active={page.route===router.asPath}/>
    });

  return (
    <>
      {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}> */}
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              // border="1px solid red"
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {makeLinks()}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <SettingsIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Preferences</MenuItem>
                <MenuItem>Help</MenuItem>
                <MenuDivider />
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* Small page */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {makeLinks()}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Nav;
