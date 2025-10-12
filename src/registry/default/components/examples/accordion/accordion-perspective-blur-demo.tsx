import { Box, CreditCard, Handbag, Receipt } from "lucide-react";

import {
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/components/ui/accordion";

export function AccordionPerspectiveBlurDemo() {
  return (
    <Accordion
      variant="outline"
      className="w-full max-w-xl"
      animationPreset="perspectiveBlur"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center gap-2">
          <Handbag className="w-4 h-4" />
          How do I place an order?
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Browse our products, add items to your cart, and proceed to
            checkout. You'll need to provide shipping and payment information to
            complete your purchase.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center gap-2">
          <Receipt className="w-4 h-4" />
          Can I modify or cancel my order?
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Yes, you can modify or cancel your order before it's shipped. Once
            your order is processed, you can't make changes.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="flex items-center gap-2">
          <CreditCard className="w-4 h-4" />
          What payment methods do you accept?
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            We accept all major credit cards, including Visa, Mastercard, and
            American Express.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="flex items-center gap-2">
          <Box className="w-4 h-4" />
          How much does shipping cost?
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Shipping costs vary based on your location and the size of your
            order. We offer free shipping for orders over $50.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
